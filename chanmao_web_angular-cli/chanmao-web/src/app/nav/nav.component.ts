import { OrderService } from '../services/order.service';
import {
  SystemService
} from './../services/system.service';
import {
  Component,
  OnInit,
  AfterViewChecked
} from '@angular/core';

declare var $: any;

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'nav'
  selector: 'cm-nav', // <cm-nav></cm-nav>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './nav.component.html'
})


export class NavComponent implements OnInit, AfterViewChecked {
  // Set our default values


  // TypeScript public modifiers
  constructor(
    private sys: SystemService,
    private orderService: OrderService
  ) {

  }

  public ngOnInit() {
    // current location
    var that= this;

      $('.cm-btn-change').click(function (e) {
        TBox(this);
      });

      $('.cm-res-address input').blur(function (e) {
        RBox(this);
      });

      function TBox(obj) {
        let input = $(obj).parent().find('input');
        let span = $(obj).parent().find('span');
        input.attr('value', span.text()).show().focus();
        span.hide();
      }

      function RBox(obj) {
        let input = $('.cm-res-address input');
        let span = $('.cm-res-address span');
        that.sys.setCurAddress(input.val());
        span.show();
        input.hide();
      }

  }

  public ngAfterViewChecked() {
    $(".cm-nav-login").click(function () {
      $('.cm-login-black').show();
      $('.cm-login').show();
    });
  }
}
