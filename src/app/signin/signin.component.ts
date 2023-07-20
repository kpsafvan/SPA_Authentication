import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  regForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) {
    
   }

  ngOnInit(): void {
    this.regForm=this.formbuilder.group(
      {
        fname:[''],
        lname:[''],
        email:[''],
        password:['']
      }
    )
  }
  Signup(){
    this.http.post<any>('http://localhost:3000/user',this.regForm.value).subscribe(abc=>{
      alert("NINGAL JEYCHU");
    });
  }

}
