import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SalesComponent } from './sales/sales.component';
import { ComponentsModule } from '../components/components.module';
import { StockListComponent } from './stock-list/stock-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    SalesComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    AuthComponent,
    SalesComponent
  ]
})
export class PagesModule { }
