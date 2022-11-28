import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {BookService} from "../services/book.service";
import {Book} from "../model/book";
import { Router } from '@angular/router';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { OrderInfo } from '../model/orderInfo';

@Component({
  selector: 'app-bookby-search',
  templateUrl: './bookby-search.component.html',
  styleUrls: ['./bookby-search.component.scss']
})
export class BookbySearchComponent implements OnInit {

  public searchForm!: FormGroup

  book = {
    category : '',
    author : '',
    price : '',
    publisher : ''
  }

  books : Book[] =[];
  order : OrderInfo[]=[];
  constructor(private formBuilder:FormBuilder, private bookService : BookService, 
    private router : Router) { }

  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      category:['', Validators.required],
      author:['', Validators.required],
      publisher:['',Validators.required],
      price:['', Validators.required]
    })
  }
  onSubmit(book: any){
     console.log(this.book);
    this.bookService.findBookByCriteria(this.book.category, this.book.author, this.book.price, this.book.publisher).subscribe(
      (data:any)=>{
        console.log(data)
       this.books = data;
      }, error =>{
        console.log(error);
        alert("could not fetch the data using this criteria");
        book.reset();
      }
    )
  }

  // More(bookId:any, book:any){
  //   this.bookService.saveBookById(bookId, book).subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //       this.router.navigate(['/moreDetails']);
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  // }
  //onclick of get the book details send it to the navigation page
  BuyBook(order:any){
    
  }
  // More(book :any){
  //   console.log({state: {data: {book}}});
  //  this.router.navigate(['/moreDetails'], {state: {data: {book}}});
  // }
}
