import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {

  constructor(private router : ActivatedRoute, private bookService : BookService,  private route : Router) { }

  books = {
    bookId : 0,
    authorId :0,
    title : '',
    author : '',
    publisher : '',
    price : 0.0,
    publishedDate : '',
    category : '',
    rating : 0.0,
    isActive : '',
    content : ''
  }
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.bookService.getBookById(this.router.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.books=res;
      },
      err=>{
        console.log(err);
        alert("could not fetch the data using bookId");
      }
    )
  }

  buyBook(bookId : any){
    console.log(bookId);
    this.route.navigate([`/buy/${bookId}`]);
  }

}

