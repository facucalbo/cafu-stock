import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { MobileBackComponent } from './mobile-back/mobile-back.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
    MobileBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ListComponent,
    MobileBackComponent
  ]
})
export class ComponentsModule { }
