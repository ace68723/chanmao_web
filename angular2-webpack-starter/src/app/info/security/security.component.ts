import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

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

  }

}
