import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authStatus$.subscribe(userStatus => {
      this.isUserLoggedIn = !!userStatus;
    });
  }

  logOut(): void {
    console.log('logOUt');
    this.authService.logout().then(res => {
      console.log(res);
    });
  }
}
