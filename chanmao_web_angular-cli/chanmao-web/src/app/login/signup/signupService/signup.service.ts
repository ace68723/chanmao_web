import {
    SystemService
} from './../../../services/system.service';
import {
    SignupObject,
    LoginResult,
    User
} from '../../interfaces';
import {
    Injectable
} from '@angular/core';
import AuthModule from '../../../modules/Auth/Auth.w.js';
// import AuthModule from './auth.js';

@Injectable()
export class SignupService {

    private signupObject: SignupObject = {
        username: '',
        password: '',
        os: '',
        version: '',
        email: ''
    };

    private loginResult: LoginResult = {
        message: '',
        result: -1,
    };

    constructor(
        private systemService: SystemService,
    ) {

    }


    public async signup(user: User){
        console.log(user);
        this.signupObject.username = user.username;
        this.signupObject.password = user.password;
        this.signupObject.os = this.systemService.getOS();
        this.signupObject.version = this.systemService.getVersion();
        this.signupObject.email = user.email;
        console.log('this is signup object: ');
        console.log(this.signupObject);
        this.loginResult = await AuthModule.AppLogin(this.signupObject);
        if (this.loginResult.result === 1) {
            return this.loginResult.message;
        }
        console.log('this is signup result: ');
        console.log(this.loginResult);
        this.systemService.saveToken(this.loginResult.token);
        this.systemService.saveUid(this.loginResult.uid);
        return 'succuss';
    }
}
