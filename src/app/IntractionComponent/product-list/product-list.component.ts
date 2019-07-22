import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

@Input() product: Product;
@Input( 'author' ) authorName : string;

  constructor() { }

  ngOnInit() {
  }

  onNotify(){
     window.alert('You will be notified when the product goes on sale');
  }

}