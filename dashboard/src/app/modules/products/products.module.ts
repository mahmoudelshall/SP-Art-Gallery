import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    AngularMatModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
