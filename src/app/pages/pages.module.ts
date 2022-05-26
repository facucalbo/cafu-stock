import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ComponentsModule } from '../components/components.module';
import { StockListComponent } from './stock-list/stock-list.component';
import { RealizedComponent } from './sales/realized/realized.component';
import { OrdersComponent } from './sales/order/order.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    StockListComponent,
    RealizedComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ScrollingModule
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
