import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {BookService} from "../services/book.service";
import { Book } from "../model/book";

@Component({
  selector: 'app-book-refund',
  templateUrl: './book-refund.component.html',
  styleUrls: ['./book-refund.component.scss']
})
export class BookRefundComponent implements OnInit {
  public bookForm!: FormGroup
  public updateForm!: FormGroup

  bookById = {
    emailId :'',
    bookId : ''
  }
  bookDetails ={
     userId:0,
         description:'',
         paymentDate:'',
         bookId:0,
         authorId:0,
         title:'',
         author:'',
         publisher:'',
         price:'',
         publishedDate:'',
         category:'',
         rating:'',
         isActive:true,
         content:'',
         userName:'',
         emailId:'',
         role:''
  }
  constructor(private formBuilder:FormBuilder, private bookService : BookService) { }

   ngOnInit(): void {
   
    this.bookForm=this.formBuilder.group({
      emailId:['', Validators.required],
      bookId:['', Validators.required]
    })
  }

}
