import { Component, OnInit } from '@angular/core';
import { ItemResponse } from 'src/app/interfaces/product-response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
  }

  addNewProduct() {

  }

}
