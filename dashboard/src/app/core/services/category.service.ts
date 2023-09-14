import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  APP_URI = environment.apiUrl;
  categoryApi = this.APP_URI + 'dashboard/categories';
  headers:HttpHeaders | undefined;
  constructor(private _http: HttpClient, private _router: Router) {
   let UD = localStorage.getItem('UD');
    if (!UD) {
      this._router.navigate(['/auth/login']);
      console.log("No Token");  
    }
    console.log(UD);
    // convert UD from json to object
    let udObj=JSON.parse(localStorage.getItem('UD')!);
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${udObj.token}`
    });
  }
   
  getCategories(): Observable<Category[]> {
    console.log(this.headers)
    return this._http.get<Category[]>(this.categoryApi, { headers: this.headers });
  }

  addCategory(body: any): Observable<any> {
    return this._http.post<any>(`${this.categoryApi}`, body, { headers: this.headers });

  }

  deleteCategory(id: number): Observable<any> {
    return this._http.delete<any>(`${this.categoryApi}/${id}` , { headers: this.headers });
  }
  editCategory(id: number, body: any): Observable<any> {
    return this._http.put<any>(`${this.categoryApi}/${id}`, body , { headers: this.headers });

  }
}
