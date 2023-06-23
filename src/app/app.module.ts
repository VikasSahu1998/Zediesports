import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './User/Shared/header/header.component';
import { FooterComponent } from './User/Shared/footer/footer.component';
import { HomeBlogComponent } from './User/Home/home-blog/home-blog.component';
import { BlogDetailComponent } from './User/Home/blog-detail/blog-detail.component';
import { AboutUsComponent } from './User/about-us/about-us.component';
import { CareerComponent } from './User/career/career.component';
import { ContantUsComponent } from './User/contant-us/contant-us.component';
import { IGCComponent } from './User/EsportsNews/igc/igc.component';
import { WGCComponent } from './User/EsportsNews/wgc/wgc.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { DashboardComponent } from './User/dashboard/dashboard.component';

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
    CareerComponent,
    IGCComponent,
    WGCComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
