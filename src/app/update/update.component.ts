import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../model/book";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BookService } from '../services/book.service';
import {AuthorPageServiceService } from "../services/author-page-service.service"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  //bookDetails:Book[]= [];
  public updateForm!: FormGroup
  constructor(private router : ActivatedRoute, private formBuilder:FormBuilder, private authorService : AuthorPageServiceService,
    private bookService : BookService) { }
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
      isActive : true,
      content : ''
    }
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.bookService.getBookById(this.router.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.bookDetails=res;
      },
      err=>{
        console.log(err);
        alert(err);
      }
    )
    
    this.updateForm=this.formBuilder.group({
      bookId:['', Validators.required],
      authorId:['', Validators.required],
      title:['', Validators.required],
      author:['', Validators.required],
      publisher:['',Validators.required],
      price:['', Validators.required],
      publishedDate:['', Validators.required],
      category:['', Validators.required],
      rating:['',Validators.required],
      isActive:['', Validators.required],
      content:['', Validators.required]
    })
  }
  
  updateBook(bookDetails: any){
    bookDetails.authorId = sessionStorage.getItem("id");
    console.log(bookDetails.authorId);
    this.bookService.updateBook(bookDetails.authorId, bookDetails.bookId, bookDetails).subscribe(
      (res:any)=>{
        console.log(res);
        alert(res + "Book Details updated successfully");
        bookDetails.reset();
      },
      err=>{
        console.log(err);
        alert("Book Details failed to update");
        bookDetails.reset();
      }
    )
  }
}
