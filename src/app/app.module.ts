import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
const appRoute:Routes=[
  {path:'',component:LoginComponent},
  
  {path:'signin',component:SigninComponent}]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
