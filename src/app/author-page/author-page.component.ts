import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AuthorPageServiceService } from '../services/author-page-service.service';
import { BookService } from '../services/book.service';
import {Register } from '../model/register';
@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {
  details :any;
  public loggedIn = false;
   books:Book[]=[];
   authorId=sessionStorage.getItem("id");
  public loginForm!: FormGroup
  public bookForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private authorService : AuthorPageServiceService,
  private bookService : BookService, ) { }
  bookDetails= {
    bookId : 0,
    authorId : 0,
    title :'',
    author : '',
    publisher : '',
    price : 0,
    publishedDate :'',
    category : '',
    rating : 0,
    active : true,
    content : ''
  }
  
  ngOnInit(): void {
    this.loggedIn = this.authorService.isLoggedIn();
    this.details = sessionStorage.getItem('userName');
    console.log(this.details);
    this.authorService.getAuthorByUsername(this.details).subscribe(
      (res:any)=>{
        sessionStorage.setItem('id', res.authorId);
        console.log(res.authorId);
        console.log(res);
        alert(res);
      },
      err=>{
        console.log(err);
      }
    )
    this.loginForm=this.formBuilder.group({
      //bookId:['', Validators.required],
      authorId:['', Validators.required],
      title:['', Validators.required],
      author:['', Validators.required],
      publisher:['',Validators.required],
      price:['', Validators.required],
      publishedDate:['', Validators.required],
      category:['', Validators.required],
      rating:['',Validators.required],
      active:['', Validators.required],
      content:['', Validators.required]
    })
    this.bookForm=this.formBuilder.group({
      bookId:['', Validators.required]
    })
  }
 
login(data : any){
  this.bookService.saveBook(this.bookDetails).subscribe((res:any)=>{
    console.log(res);
    alert("Book added successfully" + res.bookId);
    data.reset();
  },error=>{
    console.log(error);
    alert("book not added successfully");
    data.reset();
  })
}

getBooks(authorId:any){
  authorId=sessionStorage.getItem("id");
  console.log(authorId);
   this.bookService.getBooksByAuthorId(authorId).subscribe(
     (res:any)=>{
       console.log(res);
       this.books = res;
     },
     err=>{
       console.log(err);
       alert("could not fetch the data using authorId");
     }
   )
}
}
