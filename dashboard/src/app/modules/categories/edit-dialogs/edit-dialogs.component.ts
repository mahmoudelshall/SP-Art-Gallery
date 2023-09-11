import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-edit-dialogs',
  templateUrl: './edit-dialogs.component.html',
  styleUrls: ['./edit-dialogs.component.scss']
})
export class EditDialogsComponent {
  form!: FormGroup;
  error = ''
  success = ''
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _router: Router
    ){
      this.generateForm();
    }

    generateForm(): void {
      this.form = this._formBuilder.group({
        name: [
          this.data.category.name, // default value
          [ // array of validators
            Validators.required,
          ]
        ],
      });
    }

    onSubmit(): void {
      this.error = '';
      this.success = '';
      this._categoryService.editCategory(this.data.category.id,this.form.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.success = 'Category Updated successful!'
            this._router.navigate(['/categories']);
          },
          error: (err) => {
            this.error = 'Update failed!'
          },
          complete: () => {
            this.error = '';
          }
        });
    }

}
