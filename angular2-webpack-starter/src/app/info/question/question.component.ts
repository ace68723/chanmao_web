import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'cm-question',
  styles: [`
  `],
  templateUrl: 'question.html'
})
export class QuestionComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {

  }

}
