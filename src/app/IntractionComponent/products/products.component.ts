import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from './../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products = PRODUCTS;
author = 'Hossain';

  constructor() { }

  ngOnInit() {
  }

}