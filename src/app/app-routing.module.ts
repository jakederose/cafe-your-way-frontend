import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../app/components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'menu',
        component: ShoppingCartComponent
    }
];


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
