import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorLogin } from '../model/authorLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthorPageServiceService {
 // token: any;
authorId:number=0;
username:string='';
token:string='';

private baseUrl:string = "http://localhost:8981/api/v1/digitalbooks/author";

  constructor(private http:HttpClient) { }
  
  authenticate(credentials:any){
    console.log(`${this.baseUrl}/signIn/token` + JSON.stringify(credentials));
    return this.http.post<any>(`${this.baseUrl}/signIn/token`,credentials)
  }
  loginUser(token:string){
    localStorage.setItem("token", token);
    return true;
  }
  isLoggedIn(){
    let token= localStorage.getItem("token")
    if(token==undefined || token==='' || token==null)
    {
      console.log("token not generated");
      return false;
    } else{
      console.log("token generated");
      return true;
    }
  }
  getAuthorByUsername(username:any){
    // let tokenStr = 'Bearer ' + this.token;
    // const headers = new HttpHeaders().set('Authorization', tokenStr);
  console.log(`${this.baseUrl}` +`/${username}` + JSON.stringify(username) + username);
  return this.http.get<any>(`${this.baseUrl}` +`/${username}`);
}
  logout(){
    localStorage.removeItem('token')
    return true;
  } 

  getToken(){
    return localStorage.getItem("token")
  }
  createBook(bookDetails: Book){
  // this.authorId = sessionStorage.getItem('authorId');
    console.log(this.authorId);
    return this.http.post<any>(`${this.baseUrl}` + `/${this.authorId}/books`,bookDetails)
  }
  
  // public getAllAuthors(token: string) {
  //   let tokenStr = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   return this.http.get<string>(this.baseUrl, {headers, responseType: 'text' as 'json' });
  // }

  
}


