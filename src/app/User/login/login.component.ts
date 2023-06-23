import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LogInForm: FormGroup | any;;
  public showPassword: boolean = false;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router,) {  }


  ngOnInit(): void {
    this.LogInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.nullValidator]),
      password: new FormControl('', [Validators.required,Validators.nullValidator ]) 
    });

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // onsubmit(){
  //   console.log(this.LogInForm.value)
  // }
  get email() {
    return this.LogInForm.get('email');
  }

  get password() {
    return this.LogInForm.get('password');
  }

  onsubmit() {
    const { email, password } = this.LogInForm.value;

    if (!this.LogInForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      // .pipe(
      //   this.toast.observe({
      //     success: 'Logged in successfully',
      //     loading: 'Logging in...',
      //     error: ({ message }) => `There was an error: ${message} `,
      //   })
      // )
      .subscribe(() => {
        this.router.navigate(['/user/dashboard']);
        console.log(this.LogInForm.value)
      });
  }
}
