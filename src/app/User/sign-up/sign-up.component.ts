import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SignUpForm: FormGroup  | any;;
  public showPassword: boolean = false;
  constructor(private formbuilder: FormBuilder){

  }
 

  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      
    });

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
