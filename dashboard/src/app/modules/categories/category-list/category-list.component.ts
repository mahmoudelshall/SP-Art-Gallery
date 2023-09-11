import { Component } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

// // material/dialog
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  // animal: string | undefined;
  // name: string | undefined;

  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name','action'];
  constructor(private _categorySerive: CategoryService, ){  //public dialog: MatDialog
    this.getCategories();
  }
  getCategories(): void {
    this._categorySerive.getCategories()
      .subscribe({
        next: (categories) => {
          //convert json to object
           let categoryObject = JSON.parse(JSON.stringify(categories));
           this.categories = categoryObject.data; 
          console.log(categoryObject.data);
        },
        error: (err) => {
          alert('Some error occurred. Please try again later.')
        },
        complete: () => {
        }
      });
  }
  deleteCategory(id:number){
 this._categorySerive.deleteCategory(id).subscribe({
  next: (res) => {
    //convert json to object
     let resObject = JSON.parse(JSON.stringify(res)); 
    console.log(resObject);
    // Remove the deleted category from the array
    this.categories = this.categories.filter(category => category.id !== id);
  },
  error: (err) => {
    alert('Some error occurred. Please try again later.')
  },
  complete: () => {
  }
});
  }

// openDialog
// openDialog(id:number){

// }
// openDialog(): void {
//   const dialogRef = this.dialog.open(CategoryListComponent, {
//     data: {name: this.name, animal: this.animal},
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     this.animal = result;
//   });
// }



}
