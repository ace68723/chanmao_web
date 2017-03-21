import {
  Component,
  OnInit
} from '@angular/core';



declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'address'
  selector: 'cm-address',  // <address></address>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './address.component.html'
})


export class AddressComponent implements OnInit {
  // Set our default values

public count : number;
  // TypeScript public modifiers
  constructor(
  ) {

  }

/**
 * addaddress
 */
public addone() {
  ++this.count;
  console.log(this.count);
}

  public ngOnInit() {
      this.count = 0;

      $('.cm-address-popup').hide();

  }
}
