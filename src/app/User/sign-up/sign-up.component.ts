import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  SignUpForm: FormGroup | any;;
  public showPassword: boolean = false;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router,) {  }

  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
      // PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [SignUpComponent.MatchValidator('password', 'confirmPassword')]
    );

  }
  get passwordMatchError() {
    return (
      this.SignUpForm.getError('mismatch') &&
      this.SignUpForm.get('confirmPassword')?.touched
    );
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  // onsingupsubmit(){
  //  if(this.SignUpForm.valid){
  //   console.log(this.SignUpForm.value);
  //  }
  // }


  get email() {
    return this.SignUpForm.get('email');
  }

  get password() {
    return this.SignUpForm.get('password');
  }

  get confirmPassword() {
    return this.SignUpForm.get('confirmPassword');
  }

  get name() {
    return this.SignUpForm.get('name');
  }

  onsingupsubmit() {
    const { name, email, password } = this.SignUpForm.value;

    if (!this.SignUpForm.valid || !name || !password || !email) {
      return;
    }

    this.authService
      .signUp(name,email, password)
      // .pipe(
      //   this.toast.observe({
      //     success: 'Logged in successfully',
      //     loading: 'Logging in...',
      //     error: ({ message }) => `There was an error: ${message} `,
      //   })
      // )
      .subscribe(() => {
        this.router.navigate(['/user/dashboard']);
        console.log(this.SignUpForm.value)
      });
  }
}
