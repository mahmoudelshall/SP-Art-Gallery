import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCredentials } from '../models/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APP_URI = environment.apiUrl;
  authApi = this.APP_URI + 'dashboard/'
  constructor(private _http: HttpClient) { }

  login(credentials: AuthCredentials) {
    return this._http.post(this.authApi+'login', credentials);
  }
}
