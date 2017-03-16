import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User} from '../interfaces';


@Component({
  selector: 'login-main',
  styles: [`
  `],
  templateUrl: 'loginMain.html'
})
export class LoginMainComponent implements OnInit {

  public wechatImg = '../../images/wechat.png';
  public sinaImg = '../../images/sina.png ';

  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
    private auth: AuthService
  ) {}

  



  private handleError(err: any){
      console.log("could not login")
  }

  public login(user:User) : void {
          this.auth.login(user)
              .subscribe({
                  error: (err: any) => this.handleError(err),
                  complete: () => this.router.navigateByUrl('/home')
              });
      }

  public loginWithGoogle() : void {
          this.auth.authenticate('google')
              .subscribe({
                  error: (err: any) => this.handleError(err),
                  complete: () => this.router.navigateByUrl('/home')
              });
      }

  public isAuthenticated() : boolean {
    console.log(this.auth.isAuthenticated())
              return this.auth.isAuthenticated();
  }

  public logout() : void  {
        this.auth.logout()
            .subscribe({
                error: (err: any) => this.handleError(err),
                complete: () => this.router.navigateByUrl('/login')
            });
    }


    public ngOnInit() {

    }


}
