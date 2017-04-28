import {
  OrderService
} from '../../../../services/order.service';
import {
  OrderItem
} from '../../../../models/order.model';
import {
  Input,
  Component,
  OnInit,
  OnChanges
} from '@angular/core';


declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'cart'
  selector: 'cm-cart-item', // <cm-cart-item></cm-cart-item>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],  
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './cartItem.component.html'
})


export class CartItemComponent implements OnInit {
  // Set our default values
  @Input() cartItem : OrderItem;
  // TypeScript public modifiers
  constructor(
    private orderService: OrderService
  ) {

  }


  JQfunction() {

    $('.cm-cartItem').hide();
    $(".cm-cart-item").hover(
      function () {
        $(this).children('.cm-cartItem').show();
      },
      function () {
        $(this).children('.cm-cartItem').hide();
      }
    );

  }


  public ngOnInit() {
    this.JQfunction();

  }



}
