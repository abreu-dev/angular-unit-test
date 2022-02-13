import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FruitListComponent } from './fruit-list.component';

const routes: Routes = [
    {
        path: '',
        component: FruitListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FruitRoutingModule { }
