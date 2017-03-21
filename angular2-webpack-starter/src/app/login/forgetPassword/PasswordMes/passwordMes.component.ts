import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User} from '../interfaces';


@Component({
  selector: 'password-mes',
  styles: [`
  `],
  templateUrl: 'passwordMes.html'
})
export class PasswordMesComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
    private auth: AuthService
  ) {}


  public ngOnInit() {

  }

}
