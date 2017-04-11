import {
  LoginObject,
  LoginResult,
} from './../login/interfaces';

import {
  UserInfo
} from '../models/userInfo.model'

import {
  Injectable
} from '@angular/core';

@Injectable()
export class SystemService {
  private curVersion: string;
  private userToken: string;
  private curUid: string;
  private curUser: UserInfo;

  constructor() {
    this.curVersion = '1.0';
    this.userToken = '';
    this.curUid = '';
    this.curUser = {username: ''};
  }

  public getOS(): string {
    return navigator.appCodeName + '' + navigator.appVersion;
  }

  public getVersion(): string {
    return this.curVersion;
  }

  public isAuthenticated(): boolean {
    if (this.userToken == '') {
      return false;
    }
    return true;
  }
  public logout(): void {
    this.userToken = '';
    localStorage.removeItem('currentUser');
  }

  public saveToken(token: string): void {
    this.userToken = token;
    console.log('token saved');
    console.log(this.userToken);
  }

  public getToken(): string {
    return this.userToken;
  }

  public saveUid(uid: string): void {
    this.curUid = uid;
    console.log('uid saved');
    console.log(this.curUid);
  }

  public getUid(): string {
    return this.curUid;
  }

  public setCurUser(username: string, email?: string): void {
    this.curUser.username = username;
    if (email) {
      this.curUser.email = email;
    }
  }
  public getCurUserInfo(): UserInfo {
    return this.curUser;
  }

}
