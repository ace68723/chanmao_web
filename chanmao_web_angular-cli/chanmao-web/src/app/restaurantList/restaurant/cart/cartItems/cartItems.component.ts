import {
  OrderService
} from '../../../../services/order.service';
import {
  Component,
  OnInit  
} from '@angular/core';


declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'cart'
  selector: 'cm-cart-items', // <cart-itemss></cart-itemss>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './cartItems.component.html'
})


export class CartItemsComponent implements OnInit {
  // Set our default values

  // TypeScript public modifiers
  constructor(
    private orderService: OrderService
  ) {

  }

  public ngOnInit() {
  }



}
