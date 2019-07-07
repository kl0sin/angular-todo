import { Component } from '@angular/core';
import { FormSignUp } from '../../../../models/form';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  showError: boolean;
  errorMessage: string;

  constructor(private authService: AuthService) {}

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
        console.log('Success');
      })
      .catch(error => {
        this.handleShowError(error.message);
      });
  }
}
