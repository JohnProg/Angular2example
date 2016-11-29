import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';

import { UserProfileService } from './user-profile.service';

@Injectable()
export class LoginService {
  constructor(private userProfileService: UserProfileService, private http: Http) { }
  loginObserver: Observable<any>;
  login(username:string,password:string) {
  let self=this;
  return this.getUser(username,password)
      .map((users) => {
        var foundUser= users.find(user => user.username=== username && user.password=== password);
        if(foundUser)
        {
           self.toggleLogState(true);
        }
      });
  }
  getUser(username:string,password:string):Observable<any> {
    this.loginObserver = this.http.get('http://localhost:3000/users')
      .map((res: Response) => res.json());
    return this.loginObserver;

  }
  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {
    console.log(val);
    this.userProfileService.isLoggedIn = val;
  }
}
