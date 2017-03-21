import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'cm-business',
  styles: [`
  `],
  templateUrl: 'business.component.html'
})
export class BusinessComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {
          $('.cm-business').addClass('cm-active');
          $('.cm-driver').removeClass('cm-active');
  }

}
