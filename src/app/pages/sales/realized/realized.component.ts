import { Component, OnInit } from '@angular/core';

import { Item } from '../../../interfaces/product-response';

@Component({
  selector: 'app-realized',
  templateUrl: './realized.component.html',
  styleUrls: ['./realized.component.css']
})
export class RealizedComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  public itemExample: Item[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
