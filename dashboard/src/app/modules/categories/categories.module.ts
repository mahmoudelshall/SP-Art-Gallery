import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryService } from 'src/app/core/services/category.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryAddComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule
  ],
  providers: [CategoryService]
})
export class CategoriesModule { }
