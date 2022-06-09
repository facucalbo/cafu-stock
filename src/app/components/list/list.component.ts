import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InventoryBody } from '../../interfaces/inventory-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: InventoryBody[] = [];
  @Input() buttons: boolean = false;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  orderByStock() {
    this.items.sort( (a, b) => a.stock - b.stock );
  }

  selectedRow(id: string) {
    this.selected.emit(id);
  }
}
