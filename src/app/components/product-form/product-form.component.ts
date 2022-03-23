import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Body, ItemRequest } from 'src/app/interfaces/product-response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  constructor( private fb: FormBuilder, private productService: ProductService ) {
    this.createListener();
   }

  createListener() {
    this.forma.valueChanges.subscribe();
  }

  forma: FormGroup = this.fb.group({
    type: ['Pilas', [Validators.required, Validators.minLength(2)]],
    brand: ['Duracell', [Validators.required, Validators.minLength(2)]],
    model: ['AAA', [Validators.required, Validators.minLength(2)]],
    cant: ['30', Validators.required],
    stock: ['20', Validators.required],
    price: ['100', Validators.required],
  });
  
  ngOnInit(): void {
  }

  validate( field: string ) {
    return this.forma.controls[field].invalid && this.forma.controls[field].touched
  }

  @Output() modalStatus = new EventEmitter<Body>();

  save(){
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      })
    }

    const item = this.forma.value;

    this.productService.addNewProduct( item )
      .subscribe( product => {
        if(product) {
          this.modalStatus.emit( item );
          this.forma.reset();
        }
      })
  }
}