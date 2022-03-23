import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Body } from 'src/app/interfaces/product-response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  @Output() pushProduct = new EventEmitter<Body>();

  closeModal() {
    this.dataService.modalIsOpen = false
  }

  sendModal( form: Body ) {
    this.dataService.modalIsOpen = false;
    this.pushProduct.emit( form );
  }
}
