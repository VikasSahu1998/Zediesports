import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { HomeBlogComponent } from './Home/home-blog/home-blog.component';
import { BlogDetailComponent } from './Home/blog-detail/blog-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
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
    path: 'Home', component: HomeBlogComponent
  },
  { path: 'Home', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
