import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { Body } from '../../interfaces/product-response';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public products: Body[] = [];
  public selectedProductId: string = '';

  constructor( private productService: ProductService, public dataService: DataService ) { }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts() {
    this.productService.getProducts()
      .subscribe( products => {
        this.products = products;
      })
  }

  searchProducts( text: string ) {
    this.productService.searchProduct( text )
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

  pushProduct(product: Body) {
    this.products.push(product);
    this.searchProducts('');
  }

  deleteProduct() {
    this.productService.deleteProduct( this.selectedProductId )
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
