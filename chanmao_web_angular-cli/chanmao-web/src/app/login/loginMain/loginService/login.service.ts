import {
    SystemService
} from './../../../services/system.service';
import {
    LoginObject,
    LoginResult,
    User
} from '../../interfaces';
import {
    Injectable
} from '@angular/core';
import AuthModule from './../../../modules/Auth/Auth.w.js';
// import AuthModule from './auth.js';
// import AuthModule from '/Auth/Auth.w.js';

@Injectable()
export class LoginService {
    private loginObject: LoginObject = {
        username: '',
        password: '',
        os: '',
        version: ''
    };

    private loginResult: LoginResult = {
        message: '',
        result: -1,
    };

    constructor(
        private systemService: SystemService,
    ) {}

    public async login(user: User){
        this.loginObject.username = user.username;
        this.loginObject.password = user.password;
        this.loginObject.os = this.systemService.getOS();
        this.loginObject.version = this.systemService.getVersion();
        console.log('this is object: ');
        console.log(this.loginObject);
        this.loginResult = await AuthModule.AppLogin(this.loginObject);
        if (this.loginResult.result === 1) {
            console.log(this.loginResult.message);
            return this.loginResult.message;
        }
        console.log('this is result: ');
        console.log(this.loginResult);
        this.systemService.saveToken(this.loginResult.token);
        this.systemService.saveUid(this.loginResult.uid);
        return 'succuss';
    }
}
