import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'footer'
  selector: 'cm-footer',  // <cm-footer></cm-footer>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './footer.component.html'
})


export class FooterComponent implements OnInit {
  // Set our default values


  // TypeScript public modifiers
  constructor(
  ) {

  }

  public ngOnInit() {
  }
}
