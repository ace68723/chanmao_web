import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'new-password',
  styles: [`
  `],
  templateUrl: 'newPassword.component.html'
})
export class NewPasswordComponent implements OnInit {


  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router: Router,
  ) {}




  public ngOnInit() {

  }

}
