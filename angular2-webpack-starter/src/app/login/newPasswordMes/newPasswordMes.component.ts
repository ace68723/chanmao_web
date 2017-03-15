
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {User, Option} from '../interfaces';

@Component({
  selector: 'new-password-mes',
  styles: [`
  `],
  templateUrl: 'newPasswordMes.html'
})
export class NewPasswordMesComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
    private auth: AuthService
  ) {}



  public ngOnInit() {

  }

}
