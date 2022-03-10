import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
