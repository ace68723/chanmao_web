import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

declare var $ : any

@Component({
  selector: 'cm-driver',
  styles: [`
  `],
  templateUrl: 'driver.component.html'
})
export class DriverComponent implements OnInit {


  public localState: any;
  constructor(
    private router: Router,
  ) {}



  public ngOnInit() {
    $('.cm-driver').addClass('cm-active');
    $('.cm-business').removeClass('cm-active');

    $('.cm-nav-join').css("background", "url(images/nav-bg.png)").css("background-size", "100%");
    $('.cm-nav-myorder').css("background", "none");
    $('.cm-nav-index').css("background", "none");
  }

}