import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'cm-driver',
  styles: [`
  `],
  templateUrl: 'driver.html'
})
export class DriverComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {

  }


}
