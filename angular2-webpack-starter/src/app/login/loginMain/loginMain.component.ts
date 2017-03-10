import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User, Option} from '../interfaces';


@Component({
  selector: 'login-main',
  styles: [`
  `],
  templateUrl: 'loginMain.html'
})
export class LoginMainComponent implements OnInit {

  public wechatImg = '/images/wechat.png';
  public sinaImg = '/images/sina.png ';

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

  public forgetPassword() {
    this.option.forgetPassword = true;
    this.option.loginMain = false;
  }



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
      this.route
        .data
        .subscribe((data: any) => {
          // your resolved data from route
          this.localState = data.yourData;
        });

      console.log('hello `About` component');
      // static data that is bundled
      // var mockData = require('assets/mock-data/mock-data.json');
      // console.log('mockData', mockData);
      // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
      this.asyncDataWithWebpack();
    }
    private asyncDataWithWebpack() {
      // you can also async load mock data with 'es6-promise-loader'
      // you would do this if you don't want the mock-data bundled
      // remember that 'es6-promise-loader' is a promise
      setTimeout(() => {

        System.import('../../../assets/mock-data/mock-data.json')
          .then((json) => {
            console.log('async mockData', json);
            this.localState = json;
          });

      });
    }

}
