import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { HomeBlogComponent } from './Home/home-blog/home-blog.component';
import { BlogDetailComponent } from './Home/blog-detail/blog-detail.component';

const routes: Routes = [
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
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
