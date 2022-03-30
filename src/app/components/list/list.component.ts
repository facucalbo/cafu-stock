import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Body } from '../../interfaces/product-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Body[] = [];
  @Input() buttons: boolean = false;
  @Output() delete = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  orderByStock() {
    this.items.sort( (a, b) => a.stock - b.stock );
  }

  deleteProduct( id: String ) {
    this.delete.emit(id);
  }
}
