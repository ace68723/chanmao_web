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

JQfunction(){

    $('.cm-address-popup').hide();

    $('.cm-address-add').click(function(){
          $('.cm-address-popup').fadeIn();
          $('.cm-login-black').fadeIn();
    });

    $(".cm-address-popup").css('top', ($(window).height() - $(".cm-address-popup").height())/2 + "px");
    $(".cm-address-popup").css('left', ($(window).width() - $(".cm-address-popup").width())/2 + "px");

  }

  public ngOnInit() {
      this.count = 0;

      this.JQfunction();

  }
}
