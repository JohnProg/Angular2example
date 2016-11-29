import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from './login.service';
import { UserProfileService } from './user-profile.service';

@Component({
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {
  private loginSub: Subscription;
  username:string;
  password:string;
  errorMessage:string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService) {
  }

  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  login() {
    this.loginSub = this.loginService
      .login(this.username, this.password)
      .mergeMap(loginResult => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        if (this.userProfileService.isLoggedIn) {
          this.errorMessage=undefined;
          console.log(`Successfully logged in`);
          let url = redirectTo ? [redirectTo] : [ '/' ];
          this.router.navigate(url);
        }else{
          this.errorMessage="The credentials is wrong";
        }
      });
  }

  logout() {
    this.loginService.logout();
    console.log(`Successfully logged out`);
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}