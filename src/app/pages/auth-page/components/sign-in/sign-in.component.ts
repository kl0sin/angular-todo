import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { FormSignIn } from '../../../../models/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  showError: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  handleFormSubmit(data: FormSignIn): void {
    this.authService
      .login(data.email, data.password)
      .then(() => {
        this.router.navigate(['/list']);
      })
      .catch(error => {
        this.handleShowError(error.message);
      });
  }

  resetErrorBox(): void {
    this.showError = false;
    this.errorMessage = '';
  }

  handleShowError(error: string): void {
    this.showError = true;
    this.errorMessage = error;
  }
}
