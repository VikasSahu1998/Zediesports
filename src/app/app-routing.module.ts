import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'User/Login', component: LoginComponent
  },
  {
    path: 'User/SignUp', component: SignUpComponent
  },
  {
    path: '', component: HomeComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
