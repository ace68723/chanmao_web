import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {User} from '../interfaces';

@Component({
  selector: 'signup',
  styles: [`
  `],
  templateUrl: 'signup.html'
})
export class SignupComponent implements OnInit {



  public localState: any;
  constructor(
    public route: ActivatedRoute,
    private router:Router,
  ) {}


  private handleError(err: any){
      console.log("could not login")
  }



  public ngOnInit() {

 }
}
