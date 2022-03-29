import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { Body } from '../../interfaces/product-response';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public products: Body[] = [];

  constructor( private productService: ProductService, public dataService: DataService ) { }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts() {
    this.productService.getProducts()
      .subscribe( products => {
        console.log(products);
        this.products = products;
      })
  }

  searchProducts( text: String ) {
    this.productService.searchProduct( text )
      .subscribe( p => {
        this.products = p;
      })
  }

  orderByStock() {
    console.log(this.products);
    this.products.sort(( a, b ) => b.stock - a.stock );
    console.log(this.products);
  }

  openModal() {
    this.dataService.modalIsOpen = true
  }

  pushProduct(product: Body) {
    this.products.push(product);
  }

  deleteProduct( id: String ) {
    console.log('eliminando produyctik');
    this.productService.deleteProduct( id )
      .subscribe( response => {
        console.log(response);
      })
  }

}
