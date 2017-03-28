import {
    SystemService
} from './../../../services/system.service';
import {
    LoginObject,
    LoginResult
} from '../../interfaces';
import {
    Injectable
} from '@angular/core';
import AuthModule from './auth.js';


@Injectable()
export class LoginService {
    private loginObject: LoginObject = {
        username: '',
        password: '',
        os: '',
        version: ''
    };

    private loginResult: LoginResult = {
        errorcode: -1,
        message: '',
        result: -1,
        token: '',
        uid: ''
    };

    constructor(
        private systemService: SystemService,
    ) {}

    public async login(username: string, password: string){
        this.loginObject.username = username;
        this.loginObject.password = password;
        this.loginObject.os = this.systemService.getOS();
        this.loginObject.version = this.systemService.getVersion();
        console.log('this is object: ');
        console.log(this.loginObject);
        this.loginResult = await AuthModule.appLogin(this.loginObject);
        if (this.loginResult.result === 1) {
            //console.log(this.loginResult.message);
            return this.loginResult.message;
        }
        console.log('this is result: ');
        console.log(this.loginResult);
        this.systemService.saveToken(this.loginResult.token);
        this.systemService.saveUid(this.loginResult.uid);
        return 'succuss';
    }
}