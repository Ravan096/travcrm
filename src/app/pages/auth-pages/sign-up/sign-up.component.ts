import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  showPassword = false;
  isChecked = false;

  fname = '';
  lname = '';
  email = '';
  password = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    console.log('First Name:', this.fname);
    console.log('Last Name:', this.lname);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.isChecked);
  }
}
