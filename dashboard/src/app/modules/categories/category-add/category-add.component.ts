import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  form!: FormGroup;
  error = ''
  success = ''

  constructor(
    private _formBuilder: FormBuilder,
    private _categoryService: CategoryService,
    private _router: Router
  ){ this.generateForm();}

  generateForm(): void {
    this.form = this._formBuilder.group({
      name: [
        '', // default value
        [ // array of validators
          Validators.required,
        ]
      ],
    });
  }


  onSubmit(): void {
    this.error = '';
    this.success = '';
    console.log(this.form.value)
    this._categoryService.addCategory(this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.success = 'Category Add successful!';
          this._router.navigate(['/categories']);
        },
        error: (err) => {
          this.error = 'Add failed!'
        },
        complete: () => {
          this.error = '';
        }
      });
  }

}
