import { Component, OnInit } from '@angular/core';
import {AuthorPageServiceService} from '../services/author-page-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any
  username :any;
 // username = sessionStorage.getItem('userName');
  public loggedIn = false;

  constructor(private authorService : AuthorPageServiceService) { }

  ngOnInit(): void {
    this.loggedIn = this.authorService.isLoggedIn()
    this.username = sessionStorage.getItem('userName');
    this.authorService.getAuthorByUsername(this.username).subscribe(
      (user) =>{
        console.log(user);
      }, error=>{
        console.log(error);
      }

    )
  }
  // logoutUser(){
  //   this.authorService.logout();
  // }


}
