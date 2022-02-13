import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';
import { Fruit } from "./fruit.model";
import { FruitService } from "./fruit.service"

describe('FruitService', () => {
    let service: FruitService;
    let fakeHttpClient: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        fakeHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        service = new FruitService(fakeHttpClient);
    });
    
    it('deve criar service', () => {
        expect(service).toBeTruthy();
    });

    it('getAll deve retornar lista de fruits', () => {
        const apple = new Fruit(1, 'Apple');
        const grape = new Fruit(2, 'Grape');
        const banana = new Fruit(3, 'Banana');

        fakeHttpClient.get.and.returnValue(of([apple, grape, banana]));

        service.getAll().subscribe((fruits) => {
            expect(fruits.length).toBe(3);
            expect(fruits).toContain(apple);
            expect(fruits).toContain(grape);
            expect(fruits).toContain(banana);
            expect(fakeHttpClient.get).toHaveBeenCalledTimes(1);
            expect(fakeHttpClient.get).toHaveBeenCalledWith(service.serviceUrl);
        });
    });

    it('getById deve retornar fruit', () => {
        const apple = new Fruit(1, 'Apple');

        fakeHttpClient.get.and.returnValue(of(apple));

        service.getById(apple.id).subscribe((fruit) => {
            expect(fruit).toBe(apple);
            expect(fakeHttpClient.get).toHaveBeenCalledTimes(1);
            expect(fakeHttpClient.get).toHaveBeenCalledWith(`${service.serviceUrl}/${apple.id}`);
        });
    });

    it('add deve realizar envio de requisição post com body', () => {
        const apple = new Fruit(1, 'Apple');
        fakeHttpClient.post.and.returnValue(of());

        service.add(apple);

        expect(fakeHttpClient.post).toHaveBeenCalledTimes(1);
        expect(fakeHttpClient.post).toHaveBeenCalledWith(service.serviceUrl, apple);
    })

    it('update deve realizar envio de requisição put com body', () => {
        const apple = new Fruit(1, 'Apple');
        fakeHttpClient.put.and.returnValue(of());

        service.update(apple);

        expect(fakeHttpClient.put).toHaveBeenCalledTimes(1);
        expect(fakeHttpClient.put).toHaveBeenCalledWith(`${service.serviceUrl}/${apple.id}`, apple);
    })

    it('delete deve realizar envio de requisição delete', () => {
        const apple = new Fruit(1, 'Apple');
        fakeHttpClient.delete.and.returnValue(of());

        service.delete(apple.id);

        expect(fakeHttpClient.delete).toHaveBeenCalledTimes(1);
        expect(fakeHttpClient.delete).toHaveBeenCalledWith(`${service.serviceUrl}/${apple.id}`);
    })
})
