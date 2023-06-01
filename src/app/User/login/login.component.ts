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
      email: new FormControl('', [Validators.required, Validators.email]),
      Passcode: new FormControl('', [Validators.required,]),
    });

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
