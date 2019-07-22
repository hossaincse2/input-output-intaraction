import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsComponent } from './IntractionComponent/products/products.component';
import { CategoriesComponent } from './IntractionComponent/categories/categories.component';
import { ProductListComponent } from './IntractionComponent/product-list/product-list.component';
import { ProductAlertComponent } from './IntractionComponent/product-alert/product-alert.component';
  
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductsComponent, CategoriesComponent, ProductListComponent, ProductAlertComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
