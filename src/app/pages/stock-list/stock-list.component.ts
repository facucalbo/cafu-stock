import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
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

  constructor( private productService: ProductService, public dataService: DataService ) { }

  ngOnInit(): void {
  }

  orderByStock() {
    console.log(this.itemExample);
    this.itemExample.sort(( a, b ) => b.stock - a.stock );
    console.log(this.itemExample);
  }

  openModal() {
    this.dataService.modalIsOpen = true
  }

}
