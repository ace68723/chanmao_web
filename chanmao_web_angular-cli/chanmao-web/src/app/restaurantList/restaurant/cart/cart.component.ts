import { OrderService } from '../../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';


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
    private orderService: OrderService,
    // private activatedRoute: ActivatedRoute
  ) {

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
    this.JQfunction();
    // this.orderService.setCurRestaurantID(+this.activatedRoute.snapshot.paramMap.get('restaurantId'));
  }
}
