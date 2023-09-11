import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryService } from 'src/app/core/services/category.service';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';
import { EditDialogsComponent } from './edit-dialogs/edit-dialogs.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryAddComponent,
    EditDialogsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    AngularMatModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryService]
})
export class CategoriesModule { }
