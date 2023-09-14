import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCredentials } from '../models/auth.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  APP_URI = environment.apiUrl;
  authApi = this.APP_URI + 'dashboard/';
  constructor(private _http: HttpClient, private _router: Router) {}

  login(credentials: AuthCredentials) {
    return this._http.post(this.authApi + 'login', credentials);
  }

  checkUser() {
    var raw = localStorage.getItem('UD');
    var UD = !raw ? null : JSON.parse(raw);
    if (!UD || !UD?.token) {
      localStorage.removeItem('UD');
      console.log('No UD');
      return null;
    }
    return UD;
  }
 fallbackUser(fallback: string|null = null) {
    var UD = this.checkUser();
    if (!UD) this._router.navigate([(fallback??'/auth/login')]);
    return UD;
  }
  checkRoles(roles: Array<string>, uFallback: string|null = null) {
    var UD = this.fallbackUser(uFallback);
    if (!UD?.roles || !roles.includes(UD?.roles)) {
      console.log('No Authorized');
      return false;
    }
    return true;
  }
  fallbackRoles(
    roles: Array<string>,
    fallback: string |null = null,
    uFallback: string|null = null
  ) {
    var UD = this.fallbackUser(uFallback);
    if (!UD) return;
    var auth = this.checkRoles(roles, uFallback);
    if (!auth) this._router.navigate([(fallback??"/")]);
  }
}
