import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User, Option} from '../interfaces';

@Component({
  selector: 'signup-success',
  styles: [`
  `],
  templateUrl: 'signupSuccess.html'
})
export class SignupSuccessComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
    private auth: AuthService
  ) {}

  @Input() option : Option;

  public signup() {
    this.option.signup = true;
    this.option.loginMain = false;
  }


  public ngOnInit() {

  }
}
