import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authStatus$.subscribe(userStatus => {
      this.isUserLoggedIn = !!userStatus;
    });
  }

  logOut(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/sign-in']);
    });
  }
}
