import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  authorId:number=0;
  private baseUrl:string = "http://localhost:8980/api/v1/digitalbooks";

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<any>(this.baseUrl)
    }

    saveBook(bookDetails: any){
    // this.authorId = sessionStorage.getItem('authorId');
      console.log(bookDetails);
      console.log(`${this.baseUrl}` + `/author/${bookDetails.authorId}/book`+ JSON.stringify(bookDetails))
      return this.http.post<any>(`${this.baseUrl}` + `/author/${bookDetails.authorId}/book`,bookDetails )
    }

    findBookByCriteria(category:any, author:any, price:any, publisher:any){
      console.log(`${this.baseUrl}/books/${category}/${author}/${price}/${publisher}`);
      return this.http.get<any>(`${this.baseUrl}/books/${category}/${author}/${price}/${publisher}`);
    }

    getBooksByEmailId(emailId:any){
    console.log(`${this.baseUrl}/user/${emailId}/books`);
      return this.http.get<any>(`${this.baseUrl}/user/${emailId}/books`);
    }

    getBookByEmailIdAndBookId(emailId:any, bookId:any){
      console.log(`${this.baseUrl}/user/${emailId}/books/${bookId}`);
      return this.http.get<any>(`${this.baseUrl}/user/${emailId}/books/${bookId}`);
    }
    
    getBooksByAuthorId(authorId:any){
      console.log(`${this.baseUrl}`+`/author/books/${authorId}`);
      return this.http.get<any>(`${this.baseUrl}`+`/author/books/${authorId}`)
    }

    getBookById(bookId:any){
      console.log(`${this.baseUrl}`+`/user/${bookId}`);
      return this.http.get<any>(`${this.baseUrl}`+`/user/${bookId}`)
    }

    updateBook(authorId:any, bookId:any, book:any){
      console.log(`${this.baseUrl}`+`/author/${authorId}` + `/book/${bookId}`, JSON.stringify(book));
      return this.http.put<any>(`${this.baseUrl}`+`/author/${authorId}` + `/book/${bookId}`, book)
    }

    saveOrder(order: any){
      console.log(`${this.baseUrl}`+`/books/buy`, order);
      return this.http.post<any>(`${this.baseUrl}`+`/books/buy`, order)
    }

    checkIfRefundIsValid(emailId: any, bookId : any, order:any){
      console.log(`${this.baseUrl}`+`/user/${emailId}` +`/${bookId}/refund`);
      return this.http.post<any>(`${this.baseUrl}`+`/user/${emailId}` +`/${bookId}/refund`, order);

    }

    getBookByBookId(bookId:any){
      console.log(`${this.baseUrl}`+`/user/${bookId}/book`);
      return this.http.get<any>(`${this.baseUrl}`+`/user/${bookId}/book`);
    }

    getBookByEmailIdAndPaymentId(emailId:any, paymentId:any){
      console.log(`${this.baseUrl}`+`/user/${emailId}`+`/payment/${paymentId}`);
      return this.http.get<any>(`${this.baseUrl}`+`/user/${emailId}`+`/payment/${paymentId}`);
    }
   
}
