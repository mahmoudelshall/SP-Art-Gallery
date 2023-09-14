import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  Products: Product[] = [];
  //imgUrl = 'http://localhost:8000//storage/images/64f2e8381ffc5.png';

  displayedColumns: string[] = ['id', 'name', 'categoryId', 'price', 'stock', 'status',  'action'];//'image',
  constructor(private _productService: ProductService) {
    this.getProducts();
  }
  getProducts(): void {
    this._productService.getProducts()
      .subscribe({
        next: (Products) => {
          //convert json to object
          let ProductObject = JSON.parse(JSON.stringify(Products));
          this.Products = ProductObject.data;
          console.log(ProductObject.data);
        },
        error: (err) => {
          alert('Some error occurred. Please try again later.')
        },
        complete: () => {
        }
      });
  }
  deleteProduct(id: number) {
    this._productService.deleteproduct(id).subscribe({
      next: (res) => {
        //convert json to object
        let resObject = JSON.parse(JSON.stringify(res));
        console.log(resObject);
        // Remove the deleted Product from the array
        this.Products = this.Products.filter(Product => Product.id !== id);
      },
      error: (err) => {
        alert('Some error occurred. Please try again later.')
      },
      complete: () => {
      }
    });
  }
  // openDialog(cat: Product) {
  //   const dialogRef = this.dialog.open(EditDialogsComponent, { width: '50%', data: { Product: cat } });
  //   dialogRef.afterClosed().subscribe(() => {
  //     this.getProducts();
  //   })
  // }

}


