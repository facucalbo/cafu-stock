import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { InventoryBody } from '../../interfaces/inventory-response';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public products: InventoryBody[] = [];
  public selectedProductId: string = '';

  constructor( private inventoryService: InventoryService, public dataService: DataService ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.inventoryService.getProducts()
      .subscribe( products => {
        this.products = products;
      })
  }

  searchProducts( text: string ) {
    this.inventoryService.searchProduct( text )
      .subscribe( p => {
        this.products = p;
      })
  }

  orderByStock() {
    this.products.sort(( a, b ) => b.stock - a.stock );
  }

  openModal() {
    this.dataService.modalIsOpen = true
  }

  pushProduct(product: InventoryBody) {
    this.products.push(product);
    this.searchProducts('');
  }

  deleteProduct() {
    this.inventoryService.deleteProduct( this.selectedProductId )
      .subscribe( response => {
        // this.products.filter( (p, index) => {
        //   console.log(p._id + ' p._id ');
        //   console.log(this.selectedProductId + ' selectedProductId');
        //   if( p._id == this.selectedProductId ) {
        //     console.log(p._id);
        //     console.log(index);
        //     this.products.splice(index, 1);
        //   }
        // })
      })
      const found = this.products.findIndex( p => p._id == this.selectedProductId)
      this.products.splice(found, 1);
      this.selectedProductId = '';
  }

  selectedProduct( id: string ) {
    this.selectedProductId = id;
  }

}
