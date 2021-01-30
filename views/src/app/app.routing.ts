import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'payment', component: PaymentComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
