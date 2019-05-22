import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuthPageComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthPageRoutingModule, SharedModule]
})
export class AuthPageModule {}
