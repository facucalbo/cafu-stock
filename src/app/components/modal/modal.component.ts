import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryBody } from 'src/app/interfaces/inventory-response';
import { DataService } from 'src/app/services/data.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  @Output() pushProduct = new EventEmitter<InventoryBody>();
  @Input() form: boolean = false;
  @Input() deleted: boolean = false;

  closeModal() {
    this.dataService.modalIsOpen = false
  }

  sendModal( form: InventoryBody ) {
    this.dataService.modalIsOpen = false;
    this.pushProduct.emit( form );
  }
}
