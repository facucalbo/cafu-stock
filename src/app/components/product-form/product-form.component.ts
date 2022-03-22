import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  constructor( private fb: FormBuilder ) { }

  forma: FormGroup = this.fb.group({
    type: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    cant: ['', Validators.required],
    stock: ['', Validators.required],
    price: ['', Validators.required],
  });



  ngOnInit(): void {
  }

  save(){

  }

}
