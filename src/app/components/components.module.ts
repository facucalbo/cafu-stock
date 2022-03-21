import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
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
    ProductFormComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
