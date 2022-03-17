import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/product-response';

@Component({
  selector: 'app-unrealized',
  templateUrl: './unrealized.component.html',
  styleUrls: ['./unrealized.component.css']
})
export class UnrealizedComponent implements OnInit {

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
    },
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
    },
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
    },
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
    },
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
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
