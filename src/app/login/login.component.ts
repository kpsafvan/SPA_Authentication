import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) {

   }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:[''],
      password:['']

    })

  }

  login()
  {
    this.http.get<any>('http://localhost:3000/user').subscribe(res=>
    {
      const user=res.find((a:any) =>{
        
        return a.email===this.loginform.value.email && a.password===this.loginform.value.password
        

      })
      if(user)
      {
        alert("successful")
        this.loginform.reset;
      }
      else{
        alert("login not successful")
      }
    });
  }
  
  }
  