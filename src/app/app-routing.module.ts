import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { IGCComponent } from './User/EsportsNews/igc/igc.component';
import { WGCComponent } from './User/EsportsNews/wgc/wgc.component';
import { CareerComponent } from './User/career/career.component';
import { AboutUsComponent } from './User/about-us/about-us.component';
import { BlogDetailComponent } from './User/Home/blog-detail/blog-detail.component';
import { HomeBlogComponent } from './User/Home/home-blog/home-blog.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';
import {  canActivate,  redirectLoggedInTo,  redirectUnauthorizedTo,} from '@angular/fire/auth-guard';
import { NoteComponent } from './note/note.component';



const redirectToLogin = () => redirectUnauthorizedTo(['User/Login']);

const redirectToHome = () => redirectLoggedInTo(['user/dashboard']);

const routes: Routes = [
  {
    path: 'user/dashboard', component: DashboardComponent,
    ...canActivate(redirectToLogin)
    
  },
  {
    path: 'user/MyBlogs', component: NoteComponent,
    ...canActivate(redirectToLogin)
    
  },
  {
    path: 'EsportsNews/IGC', component: IGCComponent
  },
  {
    path: 'EsportsNews/WGC', component: WGCComponent
  },
  {
    path: 'Career', component: CareerComponent
  },
  {
    path: 'AboutUs', component: AboutUsComponent
  },
  {
    path: 'User/Login', component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'User/SignUp', component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'Home/User/Blog', component: BlogDetailComponent
  },
  {
    path: '', component: HomeBlogComponent
  },
  {
    path: '', redirectTo: '', pathMatch: 'full',
    component: HomeBlogComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
