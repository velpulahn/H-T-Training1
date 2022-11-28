import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' 
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {TabModule} from 'angular-tabs-component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AuthorLoginComponent } from './author-login/author-login.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookbySearchComponent } from './bookby-search/bookby-search.component';
import { AuthorPageServiceService } from './services/author-page-service.service';
import { AuthGuard } from './services/auth.guard';
 import { AuthInterceptor } from './services/auth.interceptor';
import { BookService } from './services/book.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookByEmailIdComponent } from './book-by-email-id/book-by-email-id.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './update/update.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { BookRefundComponent } from './book-refund/book-refund.component';
import { RefundComponent } from './refund/refund.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorLoginComponent,
    AuthorPageComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    BookbySearchComponent,
    NavBarComponent,
    BookByEmailIdComponent,
    MoreDetailsComponent,
    UpdateComponent,
    BuyBookComponent,
    BookRefundComponent,
    RefundComponent,
  ],
  imports: [
    BrowserModule,
   CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TabModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
  ],
 // providers: [BookService,AuthGuard],
 providers: [BookService,AuthorPageServiceService, AuthGuard, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
