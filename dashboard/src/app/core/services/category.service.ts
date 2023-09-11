import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  APP_URI = environment.apiUrl;
  categoryApi = this.APP_URI + 'dashboard/categories'
  constructor(private _http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(this.categoryApi);
  }
  deleteCategory(id:number): Observable<any> {
    return this._http.delete<any>(`${this.categoryApi}/${id}`);
  }
  editCategory(id:number, body:Array<any>): Observable<any> {
    return this._http.put<any>(`${this.categoryApi}/${id}`, [{name:'aaaaaaa'}]);
  
  }
}
