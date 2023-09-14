import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  APP_URI = environment.apiUrl;
  productApi = this.APP_URI + 'dashboard/products';
  headers: HttpHeaders | undefined;
  constructor(private _http: HttpClient, private _router: Router) {
    let UD = localStorage.getItem('UD');
    if (!UD) {
      this._router.navigate(['/auth/login']);
      console.log("No Token");
    }
    console.log(UD);
    // convert UD from json to object
    let udObj = JSON.parse(localStorage.getItem('UD')!);
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${udObj.token}`
    });
  }

  getProducts(): Observable<Product[]> {
    console.log(this.headers)
    return this._http.get<Product[]>(this.productApi, { headers: this.headers });
  }

  addproduct(body: any): Observable<any> {
    return this._http.post<any>(`${this.productApi}`, body, { headers: this.headers });

  }

  deleteproduct(id: number): Observable<any> {
    return this._http.delete<any>(`${this.productApi}/${id}`, { headers: this.headers });
  }
  editproduct(id: number, body: any): Observable<any> {
    return this._http.put<any>(`${this.productApi}/${id}`, body, { headers: this.headers });

  }
}
