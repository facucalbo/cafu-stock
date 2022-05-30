import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './order/order.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    InventoryComponent,
    OrdersComponent,
    SalesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ScrollingModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    AuthComponent,
    InventoryComponent,
    SalesComponent,
    OrdersComponent
  ]
})
export class PagesModule { }
