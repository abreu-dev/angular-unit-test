import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { FruitListComponent } from './fruit-list.component';
import { FruitModule } from './fruit.module';
import { Fruit } from './shared/fruit.model';
import { FruitService } from './shared/fruit.service';

xdescribe('FruitListComponent - Instância', () => {
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

describe('FruitListComponent - TestBed', () => {
    let component: FruitListComponent;
    let fixture: ComponentFixture<FruitListComponent>;
    let fruitService: FruitService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, FruitModule]
        }).compileComponents();

        fixture = TestBed.createComponent(FruitListComponent);
        component = fixture.componentInstance;
        fruitService = TestBed.inject(FruitService);
    })

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

        const spyOnFruitServiceGetAll = spyOn(fruitService, 'getAll').and.returnValue(of([apple, grape, banana]));

        component.loadFruits();

        expect(component.fruits.length).toBe(3);
        expect(component.fruits).toContain(apple);
        expect(component.fruits).toContain(grape);
        expect(component.fruits).toContain(banana);
        expect(spyOnFruitServiceGetAll).toHaveBeenCalledTimes(1);
    });

    it('deve renderizar titulo', () => {
        const title = fixture.debugElement.query(By.css('#title')).nativeElement;
        expect(title.innerHTML).toBe('Manage Fruits');
    })

    it('deve listar frutas', () => {
        const apple = new Fruit(1, 'Apple');
        const grape = new Fruit(2, 'Grape');
        const banana = new Fruit(3, 'Banana');
        component.fruits = [apple, grape, banana];

        fixture.detectChanges();

        const table = fixture.debugElement.query(By.css('#fruits'));

        const thead = table.query(By.css('#thead'));
        const theadId = thead.query(By.css('#th-id')).nativeElement;
        const theadName = thead.query(By.css('#th-name')).nativeElement;
        expect(theadId.innerHTML).toBe('Id');
        expect(theadName.innerHTML).toBe('Name');
        
        const tbody = table.query(By.css('#tbody'));
        const tbodyRows = tbody.queryAll(By.css('tr'));
        expect(tbodyRows.length).toBe(3);

        tbodyRows.forEach((tbodyRow, index) => {
            const tbodyId = tbodyRow.query(By.css('#td-id')).nativeElement;
            const tbodyName = tbodyRow.query(By.css('#td-name')).nativeElement;
            expect(Number(tbodyId.innerHTML)).toBe(component.fruits[index].id);
            expect(tbodyName.innerHTML).toBe(component.fruits[index].name);
        });
    })
})
