import {
  Component,
  OnInit
} from '@angular/core';



declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit {
  // Set our default values


  // TypeScript public modifiers
  constructor(
  ) {

  }

  public ngOnInit() {
    // $('.cm-nav-index').css("background", "url(images/nav-bg.png)").css("background-size", "100%");
    // $('.cm-nav-myorder').css("background", "none");
    // $('.cm-nav-join').css("background", "none");
  }
}
