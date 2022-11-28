import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AuthorLoginComponent } from './author-login/author-login.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { BookbySearchComponent } from './bookby-search/bookby-search.component';
import { BookByEmailIdComponent } from './book-by-email-id/book-by-email-id.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { UpdateComponent } from './update/update.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { BookRefundComponent } from './book-refund/book-refund.component';
import { RefundComponent } from './refund/refund.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: 'logout', component: AuthorLoginComponent},
  { path: 'authorPage', component: AuthorPageComponent, canActivate:[AuthGuard] },
  { path: 'login', component: AuthorLoginComponent },
  { path: 'signUp', component: RegisterComponent },
  {path: 'bookbysearch', component: BookbySearchComponent},
  {path: 'bookbyemailid', component: BookByEmailIdComponent},
  {path: 'moreDetails/:id', component: MoreDetailsComponent},
  {path: 'edit/:id', component: UpdateComponent},
  {path: 'buy/:id', component: BuyBookComponent},
  {path: 'refund', component: BookRefundComponent},
  {path: 'refundPage/:id', component: RefundComponent},


  { path: "**", redirectTo: "BookListComponent"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
