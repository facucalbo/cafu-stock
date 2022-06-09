import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryBody, ItemRequest } from 'src/app/interfaces/inventory-response';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  constructor( private fb: FormBuilder, private inventoryService: InventoryService ) {
    this.createListener();
   }

  createListener() {
    this.forma.valueChanges.subscribe();
  }

  forma: FormGroup = this.fb.group({
    type: ['', [Validators.required, Validators.minLength(2)]],
    brand: ['', [Validators.required, Validators.minLength(2)]],
    model: ['', [Validators.required, Validators.minLength(2)]],
    package: ['', Validators.required],
    stock: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  validate( field: string ) {
    return this.forma.controls[field].invalid && this.forma.controls[field].touched
  }

  @Output() modalStatus = new EventEmitter<InventoryBody>();

  save(){
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      })
    }

    const item = this.forma.value;

    this.inventoryService.addNewProduct( item )
      .subscribe( product => {
        if(product) {
          this.modalStatus.emit( item );
          this.forma.reset();
        }
      })
  }
}
