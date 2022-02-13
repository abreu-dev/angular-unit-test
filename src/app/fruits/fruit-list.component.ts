import { Component, OnInit } from "@angular/core";
import { Fruit } from "./shared/fruit.model";
import { FruitService } from "./shared/fruit.service";

@Component({
    selector: 'app-fruit-list',
    templateUrl: './fruit-list.component.html',
    styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent implements OnInit {
    public fruits: Fruit[] = [];

    constructor(private fruitService: FruitService) { }

    public ngOnInit(): void {
        this.loadFruits();
    }

    public loadFruits(): void {
        this.fruitService.getAll().subscribe((fruits) => {
            this.fruits = fruits;
        });
    }
}