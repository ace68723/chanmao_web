import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'cm-fresh',
  styles: [`
  `],
  templateUrl: 'fresh.html'
})
export class FreshComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {

  }

}
