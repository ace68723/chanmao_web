import {
    LoginService
} from './loginService/login.service';
import {
    Component,
    OnInit,
    Input,
    OnChanges,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    User
} from '../interfaces';
import {NgForm} from '@angular/forms';


declare var $;

@Component({
    selector: 'login-main',
    templateUrl: 'loginMain.component.html'
})
export class LoginMainComponent implements OnInit,AfterViewInit{
    @ViewChild('loginForm') currentForm: NgForm;

    private user: User;
    private authFail: boolean;
    private activated: boolean;
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
            password: '',
            email: '',
        };
    }

    public init() {
        this.authFail = false;
        this.activated = true;
        this.initUser();
    }

    public ngOnInit() {
        let that = this;
        that.init();
        $('.cm-nav-login').click(() => {
            that.init();
        });
    }

    public ngAfterViewInit() {
        this.currentForm.valueChanges.subscribe(data => {
                this.authFail = false;
            })
        }


        public async login(formValues) {
            console.log(formValues.username);
            this.user.username = formValues.username;
            this.user.password = formValues.password;
            this.result = await this.loginService.login(this.user);
            if (this.result === 'succuss') {
                this.authFail = false;
                $('.cm-login-black').hide();
                $('.cm-login').hide();
                this.initUser();
            } else {
                console.log(this.result);
                this.authFail = true;
            }
        }

        public setVisible(activated: boolean) {
            if (!activated) {
                return {
                    visibility: 'visible'
                };
            }
            return {
                visibility: 'hidden',
                height: '10px'
            };

        }

        private handleError(err: any) {
            console.log('could not login');
        }

<<<<<<< Updated upstream
    }
=======
}
>>>>>>> Stashed changes
