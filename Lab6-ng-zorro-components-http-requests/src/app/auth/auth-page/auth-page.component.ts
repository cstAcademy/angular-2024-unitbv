import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LogInPayload } from '../_helpers/interfaces/login.payload';
import { AuthService } from '../_helpers/services/auth.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  rememberMe: boolean = false;
  userToken: string | null = '';

  constructor(private authService: AuthService, private router: Router, private notificationService: NzNotificationService) {}

  ngOnInit(): void {
    this.userToken = this.authService.getToken();
  }

  onSuccessRequest(): void {
    const payload: LogInPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    this.authService.successLogIn(payload).subscribe((response: { token: string; }) => {
      console.log(response);
      this.authService.setToken(response.token);
      this.userToken = this.authService.getToken();
      sessionStorage.setItem('userToken', response.token);
      this.router.navigateByUrl('/table');
    });
  }

  onErrorRequest(): void {
    this.authService.errorLogIn({ email: 'peter@klaven' }).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err: any) => {
        console.error(err);
        this.notificationService.error('Error', 'Something went wrong');
        this.userToken = null;
        this.authService.logOut();
      },
    });
  }

  onRememberMeRequest(): void {
    const payload: LogInPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    this.authService.successLogIn(payload).subscribe({
      next: (response: { token: string; }) => {
        console.log(response);
        this.authService.setToken(response.token);
        this.userToken = this.authService.getToken();

        if (this.rememberMe) {
          localStorage.setItem('userToken', response.token);
        } else {
          sessionStorage.setItem('userToken', response.token);
        }

        this.router.navigateByUrl('/table');
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
