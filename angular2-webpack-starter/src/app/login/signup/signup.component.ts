import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User} from '../interfaces';

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
