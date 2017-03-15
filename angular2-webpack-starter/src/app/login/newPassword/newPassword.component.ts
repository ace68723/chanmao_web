import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User, Option} from '../interfaces';


@Component({
  selector: 'new-password',
  styles: [`
  `],
  templateUrl: 'newPassword.html'
})
export class NewPasswordComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
    private auth: AuthService
  ) {}

  @Input() option : Option;

  public newPasswordMes() {
    this.option.newPasswordMes = true;
    this.option.loginMain = false;
  }

  public ngOnInit() {

  }

}
