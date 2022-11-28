import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../model/register';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  public loginForm!: FormGroup
  credentials = {
    authorId : 0,
    userName : '',
    password : '',
    emailId : '',
    roles : ''
  }
  authors = new Register(2,'harsha','harsha@123','harsha@gmail.com','Author');
  constructor(private _registerService:RegisterService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      //authorId:['', Validators.required],
      userName:['', Validators.required],
      password:['', Validators.required],
      emailId:['', Validators.required],
      roles:['',Validators.required],
    })
  }
  fetchAllAuthors(){
    this._registerService.getAllAuthors().subscribe({
      next: (res:any)=>{
        console.log(res)
        this.authors = res;
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }
  login(data : any){
    console.log(this.credentials);
    this._registerService.saveAuthor(this.credentials).subscribe((res:any)=>{
      console.log(res);
      alert("Author added successfully : " + res.authorId);
      data.reset();
    },error=>{
      console.log(error);
      alert("Author not saved successfully");
      data.reset();
    })
  }

  }

