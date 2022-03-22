import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemRequest } from 'src/app/interfaces/product-response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  constructor( private fb: FormBuilder, private productService: ProductService ) { }

  forma: FormGroup = this.fb.group({
    type: ['Pilas', Validators.required],
    brand: ['Duracell', Validators.required],
    model: ['AAA', Validators.required],
    cant: ['30', Validators.required],
    stock: ['20', Validators.required],
    price: ['100', Validators.required],
  });



  ngOnInit(): void {
  }

  save(){
    let item = this.forma.value;

    console.log(item);

    this.productService.addNewProduct( item )
      .subscribe( product => {
        console.log(product);
      })
  }

}
