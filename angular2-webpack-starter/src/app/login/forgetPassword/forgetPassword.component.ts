import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {User,} from '../interfaces';

@Component({
  selector: 'forget-password',
  styles: [`
  `],
  templateUrl: 'forgetPassword.html'
})
export class ForgetPasswordComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
  ) {}



  public ngOnInit() {

  }

}
