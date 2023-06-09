import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';

import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeBlogComponent } from './Home/home-blog/home-blog.component';
import { BlogDetailComponent } from './Home/blog-detail/blog-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContantUsComponent } from './contant-us/contant-us.component';
import { CareerComponent } from './career/career.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    LoginComponent,
    SignUpComponent,
    HomeBlogComponent,
    BlogDetailComponent,
    AboutUsComponent,
    ContantUsComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
