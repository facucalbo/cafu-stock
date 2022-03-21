import { Component, OnInit } from '@angular/core';
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

  closeModal() {
    this.dataService.modalIsOpen = false
  }

}
