import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../model/register';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

   private baseUrl:string = "http://localhost:8981/api/v1/digitalbooks/author";

   constructor(private http:HttpClient) { }

  // welcome(){
  //   return this.http.get(this.baseUrl);
  // }
  getAllAuthors(){
    return this.http.get(this.baseUrl);
  }
  saveAuthor(signUp:Register){
    console.log(`${this.baseUrl}/signUp` + JSON.stringify(signUp))
    return this.http.post<any>(`${this.baseUrl}/signUp`, signUp);
  }
 getAllBooks(){
 return this.http.get<any>(this.baseUrl)
 }
  
}
