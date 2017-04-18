import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'cm-fresh',
  styles: [`
  `],
  templateUrl: 'fresh.component.html'
})
export class FreshComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {
      $('.cm-fresh').addClass('cm-active');
      $('.cm-about').removeClass('cm-active');
      $('.cm-question').removeClass('cm-active');
  }

}
