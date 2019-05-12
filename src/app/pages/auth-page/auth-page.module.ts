import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthPageRoutingModule } from './auth-page-routing.module';

@NgModule({
  declarations: [AuthPageComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthPageRoutingModule]
})
export class AuthPageModule {}
