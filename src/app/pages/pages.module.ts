import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { RealizedComponent } from './sales/realized/realized.component';
import { OrdersComponent } from './sales/order/order.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    StockListComponent,
    OrdersComponent,
    RealizedComponent,
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
    StockListComponent,
    RealizedComponent,
    OrdersComponent
  ]
})
export class PagesModule { }
