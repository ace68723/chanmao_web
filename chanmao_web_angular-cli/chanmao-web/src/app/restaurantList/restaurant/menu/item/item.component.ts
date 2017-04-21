import {
  Item
} from '../../../restaurant.model';
import {
  OrderService
} from '../../../../services/order.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';

declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'item'
  selector: 'cm-item', // <item></item>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './item.component.html'
})


export class ItemComponent implements OnInit {
  // Set our default values
  @Input() curItem :Item;

  // TypeScript public modifiers
  constructor(
    private orderService: OrderService
  ) {

  }

  public ngOnInit() {
    // $('.cm-item-comment').focus();

  }
  

}
