import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    AngularMatModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
