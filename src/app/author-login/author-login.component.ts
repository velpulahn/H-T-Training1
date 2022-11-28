import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { AuthorLogin } from '../model/authorLogin';
import { AuthorPageServiceService } from '../services/author-page-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { identifierModuleUrl, Token } from '@angular/compiler';
@Component({
  selector: 'app-author-login',
  templateUrl: './author-login.component.html',
  styleUrls: ['./author-login.component.scss']
})
export class AuthorLoginComponent implements OnInit {
  
  credentials ={
    username:'',
    password:''
  }
  constructor(private authorService : AuthorPageServiceService, private formBuilder:FormBuilder,
   private http : HttpClient, private router : Router
    ) {

   }

  ngOnInit(): void {
   
  }
 onSubmit(){
   if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
 {
  this.authorService.authenticate(this.credentials).subscribe(
  (data:any)=>{
    if(data.token){
          console.log(data.token);
          console.log(this.credentials.username);
    sessionStorage.setItem("userName", this.credentials.username);
    this.authorService.loginUser(data.token);
    this.router.navigate(['/authorPage']);
    } else {
      alert("Not a valid credentials, Please login again");
      this.credentials.username ='';
      this.credentials.password ='';
    }
  },
  error=>{
    alert("Not a valid credentials, Please login again");
    this.credentials.username ='';
    this.credentials.password ='';
  }
  )
 }
else {
  console.log(this.credentials.username);
  console.log(this.credentials.password);
  console.log("Fields are empty");
}
}

}
