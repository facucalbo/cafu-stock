import { Component, OnInit } from '@angular/core';
import { ItemResponse } from 'src/app/interfaces/product-response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public itemExample: ItemResponse[] = [
    {
      id:    '1111',
      type:    'pila',
      brand:    'duracell',
      model:    'AAA',
      cant:    30,
      stock:    20,
      price:    30
    },
    {
      id:    '2222',
      type:    'afeitadora',
      brand:    'gillete',
      model:    'max 3',
      cant:    12,
      stock:    10,
      price:    20
    },
    {
      id:    '3333',
      type:    'chicle',
      brand:    'beldent',
      model:    'infinit',
      cant:    20,
      stock:    50,
      price:    40
    }
  ]

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
  }

  addNewProduct() {

  }

}
