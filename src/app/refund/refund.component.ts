import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {BookService} from "../services/book.service";
import { Book } from "../model/book";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
  public updateForm!: FormGroup

  constructor(private router : ActivatedRoute, private formBuilder:FormBuilder,
     private bookService : BookService) { }

  bookDetails ={
         paymentId:0,
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
         roles:''
  }
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.bookService.getBookByBookId(this.router.snapshot.params.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.bookDetails=res;
      },
      err=>{
        console.log(err);
      }
    )
    this.updateForm=this.formBuilder.group({
      paymentId:['', Validators.required],
      userId:['', Validators.required],
      description:['', Validators.required],
      paymentDate:['', Validators.required],
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
      content:['', Validators.required],
      userName:['', Validators.required],
      emailId:['', Validators.required],
      roles:['', Validators.required]
    })
  }

  onSubmitBy(bookDetails: any){
    console.log(this.bookDetails);
    console.log(this.bookDetails.emailId);
    this.bookService.checkIfRefundIsValid(this.bookDetails.emailId, this.bookDetails.bookId, this.bookDetails).subscribe(
      (res:any)=>{
        console.log(res.statusMessage);
        alert(res.statusMessage);
        bookDetails.reset();
      }, 
      err=>{
        console.log(err);
        alert("Refund not succeeded there is an internal error");
        bookDetails.reset();
      }
    )
  }
}
