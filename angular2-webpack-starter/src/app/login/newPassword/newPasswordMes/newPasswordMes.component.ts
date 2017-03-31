
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {User} from '../interfaces';

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
  ) {}



  public ngOnInit() {

  }

}
