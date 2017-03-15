import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User, Option} from '../interfaces';

@Component({
  selector: 'signup',
  styles: [`
  `],
  templateUrl: 'signup.html'
})
export class SignupComponent implements OnInit {

  public wechaImg = 'images/wechat.png';
  public sinaImg = 'images/sina.png';

  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
    private auth: AuthService
  ) {}


  private handleError(err: any){
      console.log("could not login")
  }

  @Input() option : Option;


  public login() {
    this.option.signup = false;
    this.option.loginMain = true;
  }

  public signupSuccess() {
    this.option.signup = false;
    this.option.signupSuccess = true;
  }

  public signup(user: User) {
          this.auth.signup(user)
              .subscribe({
                  error: (err: any) => this.handleError(err),
                  complete: () => this.router.navigateByUrl('/home')
              });
      }


  public loginWithGoogle() {
              this.auth.authenticate('google')
                  .subscribe({
                      error: (err: any) => this.handleError(err),
                      complete: () => this.router.navigateByUrl('/home')
                  });
                }


  public ngOnInit() {

 }
}
