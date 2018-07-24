import { Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const appRoutes: Routes = [


  {
    path: '',    
    redirectTo: '/CustomerDetailsComponent',
    pathMatch: 'full'
  },
  {
    path: 'CustomerDetailsComponent',   
    component: CustomerDetailsComponent,
  },
  {
    path: 'OrderDetailsComponent',   
    component: OrderDetailsComponent,
  }
];
