import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {BookService} from "../services/book.service";
import { Book } from "../model/book";
import {OrderInfo} from "../model/orderInfo";

@Component({
  selector: 'app-book-by-email-id',
  templateUrl: './book-by-email-id.component.html',
  styleUrls: ['./book-by-email-id.component.scss']
})
export class BookByEmailIdComponent implements OnInit {

  user = {
    emailId : ''
  }
  bookById = {
    emailId : '',
    bookId : ''
  }
  bookByPaymentId = {
    emailId : '',
    paymentId : ''
  }
  books : Book[] =[];
  book : Book[] =[];
  order : OrderInfo[]= [];
  public userForm!: FormGroup
  public bookForm!: FormGroup
  public paymentForm!: FormGroup

  constructor(private formBuilder:FormBuilder, private bookService : BookService) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      emailId:['', Validators.required]
    })
    this.bookForm=this.formBuilder.group({
      emailId:['', Validators.required],
      bookId:['', Validators.required]
    })
    this.paymentForm=this.formBuilder.group({
      emailId:['', Validators.required],
      paymentId:['', Validators.required]
    })
  }

  onSubmit(user:any){
    console.log(user);
    this.bookService.getBooksByEmailId(user.emailId).subscribe(
      (res:any)=>{
        console.log(res);
        this.books = res;
      },
      error=>{
        console.log(error);
        alert("could not fetch the data using emailId");
        user.reset();
      }
    )
  }
  
  onSubmitBy(bookById: any){
    console.log(bookById);
    this.bookService.getBookByEmailIdAndBookId(bookById.emailId, bookById.bookId).subscribe(
      (res:any)=>{
        console.log(res);
        this.book = res;
      },
      error=>{
        console.log(error);
        alert("could not fetch the data using emailId and bookId");
        bookById.reset();
      }
    )
  }

  onSubmitOf(bookByPaymentId: any){
    console.log(bookByPaymentId);
    this.bookService.getBookByEmailIdAndPaymentId(bookByPaymentId.emailId, bookByPaymentId.paymentId).subscribe(
      (res:any)=>{
        console.log(res);
        this.order = res;
      },
      error=>{
        console.log(error);
        alert("could not fetch the data using emailId and paymentId");
        bookByPaymentId.reset();
      }
    )
  }
}
