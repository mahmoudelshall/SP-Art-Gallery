import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMatModule } from './shared/ui/angular-mat/angular-mat.module';
import { CategoryListComponent } from './modules/Category/category-list/category-list.component';
import { CategoryModule } from './modules/category.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMatModule,
    CategoryModule,                                                                   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
