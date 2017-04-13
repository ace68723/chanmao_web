import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'password-mes',
  styles: [`
  `],
  templateUrl: 'passwordMes.component.html'
})
export class PasswordMesComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private router:Router,
  ) {}


  public ngOnInit() {

  }

}
