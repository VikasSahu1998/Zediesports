import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { HomeBlogComponent } from './Home/home-blog/home-blog.component';
import { BlogDetailComponent } from './Home/blog-detail/blog-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { IGCComponent } from './EsportsNews/igc/igc.component';
import { WGCComponent } from './EsportsNews/wgc/wgc.component';

const routes: Routes = [
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
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
