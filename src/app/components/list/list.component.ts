import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/product-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() buttons: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  orderByStock() {
    this.items.sort( (a, b) => a.stock - b.stock );
  }

}
