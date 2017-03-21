import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'user-info',
  styles: [`
  `],
  templateUrl: 'userInfo.html'
})
export class UserInfoComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}


  public ngOnInit() {
          $('.cm-personal').addClass('cm-active');
          $('.cm-myorder').removeClass('cm-active');
          $('.cm-security').removeClass('cm-active');
  }

}
