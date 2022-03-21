import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/product-response';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public itemExample: Item[] = [
    {
      id:    '1111',
      name:    'pila',
      type:    'pila',
      brand:    'duracell',
      model:    'AAA',
      cant:    30,
      stock:    20,
    },
    {
      id:    '2222',
      name:    'afeitadora',
      type:    'afeitadora',
      brand:    'gillete',
      model:    'max 3',
      cant:    12,
      stock:    10,
    },
    {
      id:    '3333',
      name:    'chicle',
      type:    'chicle',
      brand:    'beldent',
      model:    'infinit',
      cant:    20,
      stock:    50,
    }
  ]

  constructor( ) { }

  ngOnInit(): void {
  }

  orderByStock() {
    console.log(this.itemExample);
    this.itemExample.sort(( a, b ) => b.stock - a.stock );
    console.log(this.itemExample);
  }

}
