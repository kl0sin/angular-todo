import { Component } from '@angular/core';
import { FormSignUp } from '../../../../models/form';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  showError: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  handleFormSubmit(data: FormSignUp): void {
    this.resertErrorBox();
    const notMatchPasswordMessage = 'Passwords do not match!';
    const password = data.password;
    const confirmPassword = data.confirmPassword;

    password === confirmPassword ? this.sendAuthRequest(data) : this.handleShowError(notMatchPasswordMessage);
  }

  resertErrorBox(): void {
    this.showError = false;
    this.errorMessage = '';
  }

  handleShowError(error: string): void {
    this.showError = true;
    this.errorMessage = error;
  }

  sendAuthRequest(data: FormSignUp): void {
    this.authService
      .register(data.email, data.password)
      .then(() => {
        this.router.navigate(['/list']);
      })
      .catch(error => {
        this.handleShowError(error.message);
      });
  }
}
