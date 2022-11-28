import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../model/book";
import { BookService } from '../services/book.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.scss']
})
export class BuyBookComponent implements OnInit {

  //books : Book[]=[];
  books = {
    bookId: 0,
    authorId: 0,
    title: '',
    author: '',
    publisher: '',
    price: 0,
    publishedDate: '',
    category: '',
    rating: 0,
    isActive: true,
    content: '',
    userId: 0,
    emailId: '',
    userName: '',
    description: '',
    paymentDate: '',
    role:''
  }
  buyBook = {
    userId: 0,
    emailId: '',
    userName: '',
    description: '',
    role: '',
    paymentDate: ''
  }
  public bookForm!: FormGroup
  constructor(private router: ActivatedRoute, private bookService: BookService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.bookForm = this.formBuilder.group({
      userId: ['', Validators.required],
      emailId: ['', Validators.required],
      userName: ['', Validators.required],
      description: ['', Validators.required],
      role: ['', Validators.required],
      paymentDate: ['', Validators.required]
    })
    this.bookService.getBookById(this.router.snapshot.params.id).subscribe(
      (res: any) => {
        console.log(res);
        this.books = res;
      },
      err => {
        console.log("could not fetch the data using bookId");
      }
    )

  }

  onSubmitBy(order: any) {
    console.log(order);''
    this.bookService.saveOrder(order).subscribe(
      (res:any)=>{
        console.log(res);
        alert("Book Succesfully ordered by you" + res.paymentId);
        order.reset();
      },
      err=>{
        console.log("Book order not placed");
      }
    )
  }
}
