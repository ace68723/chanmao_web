import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {InfoOption} from '../interfaces';

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

  }

}
