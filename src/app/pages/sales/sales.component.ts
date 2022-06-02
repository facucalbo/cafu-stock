import { Component, OnInit } from '@angular/core';

import { ItemResponse } from '../../interfaces/inventory-response';

@Component({
  selector: 'app-sales',
  templateUrl: './Sales.component.html',
  styleUrls: ['./Sales.component.css']
})
export class SalesComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
