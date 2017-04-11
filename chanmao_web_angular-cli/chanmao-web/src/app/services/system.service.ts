import {
    LoginObject,
    LoginResult
} from './../login/interfaces';

import {
    Injectable
} from '@angular/core';

@Injectable()
export class SystemService  {
    private curVersion: string = '1.0';
    private userToken: string = '';
    private curUid: string = '';

    constructor(
  ) {
    this.curVersion = '1.0';
    this.userToken = '';
    this.curUid = '';
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

}