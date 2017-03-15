import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'cm-business',
  styles: [`
  `],
  templateUrl: 'business.html'
})
export class BusinessComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {

  }

}
