import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { FruitListComponent } from './fruit-list.component';
import { Fruit } from './shared/fruit.model';
import { FruitService } from './shared/fruit.service';

describe('FruitListComponent', () => {
    let component: FruitListComponent;
    let fakeFruitService: jasmine.SpyObj<FruitService>;

    beforeEach(() => {
        fakeFruitService = jasmine.createSpyObj('FruitService', ['getAll']);
        component = new FruitListComponent(fakeFruitService);
    });
    
    it('deve criar component', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit deve executar método que carrega lista de frutas', () => {
        const spyOnLoadFruits = spyOn(component, 'loadFruits').and.callFake(() => {});

        component.ngOnInit();

        expect(spyOnLoadFruits).toHaveBeenCalledTimes(1);
    });

    it('loadFruits deve carregar lista de frutas', () => {
        const apple = new Fruit(1, 'Apple');
        const grape = new Fruit(2, 'Grape');
        const banana = new Fruit(3, 'Banana');

        fakeFruitService.getAll.and.returnValue(of([apple, grape, banana]));

        component.loadFruits();

        expect(component.fruits.length).toBe(3);
        expect(component.fruits).toContain(apple);
        expect(component.fruits).toContain(grape);
        expect(component.fruits).toContain(banana);
        expect(fakeFruitService.getAll).toHaveBeenCalledTimes(1);
    });
})
