import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'security',
  styles: [`
  `],
  templateUrl: 'security.html'
})
export class SecurityComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {
          $('.cm-security').addClass('cm-active');
          $('.cm-personal').removeClass('cm-active');
          $('.cm-myorder').removeClass('cm-active');
  }

}
