import {
  Component,
  OnInit
} from '@angular/core';


import {Option} from "./interfaces";

declare var $ : any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'cart'
  selector: 'cart',  // <cart></cart>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './cart.component.html'
})


export class CartComponent implements OnInit {
  // Set our default values


  // TypeScript public modifiers
  constructor(
  ) {

  }
  JQfunction(){
    $('.cm-modify').hide();
        $(".cm-cart-item").hover(
          function(){
           $(this).children('.cm-modify').show();},
          function(){
           $(this).children('.cm-modify').hide();}
        );

  }

  public ngOnInit() {
    this.JQfunction();
  }
}
