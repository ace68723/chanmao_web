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

@Component({
  selector: 'signup',
  styles: [`
  `],
  templateUrl: 'signup.html'
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;
  private usernameRepeated: boolean;
  private username: FormControl = new FormControl('', Validators.required);
  private password: FormControl = new FormControl('', Validators.required);
  private confirmPassword: FormControl = new FormControl('', Validators.required);
  private email: FormControl = new FormControl('', Validators.compose(
    [Validators.required, emailValidator])
    );

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.signupForm = fb.group({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email
    }, { validator: matchingPasswords('password', 'confirmPassword')});
  }

private init(){
  this.usernameRepeated = false;
}

  public ngOnInit() {


  }
}