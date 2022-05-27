import { Component, OnInit } from '@angular/core';

import { ItemResponse } from '../../../interfaces/product-response';

@Component({
  selector: 'app-realized',
  templateUrl: './realized.component.html',
  styleUrls: ['./realized.component.css']
})
export class RealizedComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
