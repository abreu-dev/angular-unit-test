import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FruitListComponent } from './fruit-list.component';
import { FruitRoutingModule } from './fruit-routing.module';
import { FruitService } from './shared/fruit.service';

@NgModule({
    declarations: [
        FruitListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FruitRoutingModule
    ],
    providers: [FruitService]
})
export class FruitModule { }
