import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: ShoppingCartComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
