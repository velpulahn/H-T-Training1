import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthorPageServiceService } from "./author-page-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authorService: AuthorPageServiceService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
    let newReq = req;
    let token = this.authorService.getToken()
    if(token!=null){
        newReq = newReq.clone({setHeaders:{Authorization: `Bearer ${token}`}})
    }
    return next.handle(newReq)
    }
}