
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
 

@Component({
  selector: 'new-password-mes',
  styles: [`
  `],
  templateUrl: 'newPasswordMes.component.html'
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
