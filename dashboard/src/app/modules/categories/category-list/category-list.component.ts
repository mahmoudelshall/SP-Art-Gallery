import { Component } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name'];
  constructor(private _categorySerive: CategoryService){
    this.getCategories();
  }
  getCategories(): void {
    this._categorySerive.getCategories()
      .subscribe({
        next: (categories) => {
          this.categories = categories;
          console.log(categories);
        },
        error: (err) => {
          alert('Some error occurred. Please try again later.')
        },
        complete: () => {
        }
      });
  }
}
