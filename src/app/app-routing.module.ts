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


// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['User/Login']);
// const redirectLoggedInToHome = () => redirectLoggedInTo(['user/dashboard']);

const routes: Routes = [
  {
    path: 'user/dashboard', component: DashboardComponent,
    
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
    path: 'User/Login', component: LoginComponent
  },
  {
    path: 'User/SignUp', component: SignUpComponent
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
