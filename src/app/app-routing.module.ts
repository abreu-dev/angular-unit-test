import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fruits',
    pathMatch: 'full',
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruit.module').then((m) => m.FruitModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
