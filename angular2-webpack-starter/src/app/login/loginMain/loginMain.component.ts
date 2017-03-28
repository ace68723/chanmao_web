import {
    LoginService
} from './loginService/login.service';
import {
    Component,
    OnInit,
    Input,
    OnChanges
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    User
} from '../interfaces';

declare var $;

@Component({
    selector: 'login-main',
    styles: [`
  `],
    templateUrl: 'loginMain.component.html'
})
export class LoginMainComponent implements OnInit {

    public user: User;
    public authFail: boolean;
    private result: string;

    constructor(
        public route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
    ) {}

    public initUser() {
        this.result = '';
        this.user = {
            username: '',
            password: ''
        };
    }

    public init() {
        this.authFail = false;
        this.initUser();
    }

    public ngOnInit() {
        let that = this;
        that.init();
        $('.cm-nav-login').click(() => {
            that.init();
        });
    }


    public async login(formValues) {
        console.log(formValues);
        this.result = await this.loginService.login(this.user.username, this.user.password);
        if (this.result === 'succuss') {
            this.authFail = false;
            $('.cm-login-black').hide(); 
            $('.cm-login').hide(); 
        } else {
            console.log(this.result);
            this.authFail = true;
        }
    }

    private handleError(err: any) {
        console.log('could not login');
    }

}