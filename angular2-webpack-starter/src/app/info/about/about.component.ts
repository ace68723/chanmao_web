import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'cm-about',
  styles: [`
  `],
  templateUrl: 'about.html'
})
export class AboutComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {

  }

}
