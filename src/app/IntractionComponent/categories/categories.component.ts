import { Component, OnInit } from '@angular/core';

import { CATEGORIES } from './../../category';
import { Product } from './../../product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}