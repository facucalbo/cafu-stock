import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StockListComponent } from './pages/stock-list/stock-list.component';
import { RealizedComponent } from './pages/sales/realized/realized.component';
import { OrdersComponent } from './pages/sales/order/order.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stock', component: StockListComponent },
  { path: 'sales', component: RealizedComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ]},
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
