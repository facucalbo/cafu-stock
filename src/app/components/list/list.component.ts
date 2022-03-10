import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/product-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
