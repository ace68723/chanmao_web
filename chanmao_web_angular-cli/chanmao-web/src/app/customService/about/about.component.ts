import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'cm-about',
  styles: [`
  `],
  templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {
      $('.cm-about').addClass('cm-active');
      $('.cm-fresh').removeClass('cm-active');
      $('.cm-question').removeClass('cm-active');
  }

}
