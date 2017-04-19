import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'cm-question',
  styles: [`
  `],
  templateUrl: 'question.component.html'
})
export class QuestionComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}



  public ngOnInit() {
          $('.cm-question').addClass('cm-active');
          $('.cm-fresh').removeClass('cm-active');
          $('.cm-about').removeClass('cm-active');
  }

}
