import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { MobileBackComponent } from './mobile-back/mobile-back.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
    MobileBackComponent,
    ProductFormComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    ListComponent,
    MobileBackComponent,
    ProductFormComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
