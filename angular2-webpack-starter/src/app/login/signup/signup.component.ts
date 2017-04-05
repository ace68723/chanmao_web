import {
  SignupService
} from './signupService/signup.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  User
} from '../interfaces';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  emailValidator,
  matchingPasswords
} from './validators/validators';

declare let $ : any;

@Component({
  selector: 'signup',
  styles: [`
  `],
  templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {

  private user: User;
  private authFail: boolean;
  private result: string;
  private usernameRepeated: boolean;

  // validator
  private signupForm: FormGroup;
  private username: FormControl = new FormControl('', Validators.required);
  private password: FormControl = new FormControl('', Validators.required);
  private confirmPassword: FormControl = new FormControl('', Validators.required);
  private email: FormControl = new FormControl('', Validators.compose(
    [Validators.required, emailValidator]));

  constructor(
    private router: Router,
    private signupService: SignupService,
    private fb: FormBuilder,
    public route: ActivatedRoute,

  ) {
    this.signupForm = fb.group({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email
    }, {
      validator: matchingPasswords('password', 'confirmPassword')
    });
  }


  public ngOnInit() {
        let that = this;
        that.init();
        $('.cm-nav-signup').click(() => {
            that.init();
        });
  }

  public async signup(formValues) {
    console.log(formValues);
    this.user.username = formValues.username;
    this.user.password = formValues.password;
    this.user.email = formValues.email;
    console.log(this.user);
    this.result = await this.signupService.signup(this.user);
    if (this.result === 'succuss') {
      this.authFail = false;
      this.initUser();
      this.welcome();
    } else {
      console.log(this.result);
      this.authFail = true;
      this.usernameRepeated = true;
    }
    return false;
  }

  private init() {
    this.usernameRepeated = false;
    this.authFail = false;
    this.initUser();
  }

  private initUser() {
        this.result = '';
        this.user = {
            username: '',
            password: '',
            email: '',
        };
    }

    private welcome(){
          $('.cm-welcome').show();
          $('.cm-signup').hide();
    }
}