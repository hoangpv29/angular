import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {  HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { Product_detailComponent } from './pages/product_detail/product_detail.component';
import { Not_foundComponent } from './Not_found/Not_found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { SignupComponent } from './pages/logup/logup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    Not_foundComponent,
    LoginComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
