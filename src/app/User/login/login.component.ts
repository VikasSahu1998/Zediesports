import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LogInForm: FormGroup | any;;
  public showPassword: boolean = false;
  constructor(private formbuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.LogInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.nullValidator]),
      Passcode: new FormControl('', [Validators.required,Validators.nullValidator ,Validators.pattern ('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}') ]) 
    });

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
