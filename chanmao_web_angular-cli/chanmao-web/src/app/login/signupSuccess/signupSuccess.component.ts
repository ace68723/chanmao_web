import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
 

@Component({
  selector: 'signup-success',
  styles: [`
  `],
  templateUrl: 'signupSuccess.component.html'
})
export class SignupSuccessComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
  ) {}




  public ngOnInit() {

  }
}
