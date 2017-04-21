import { Menu, Item } from '../../restaurant.model';
import { OrderService } from '../../../services/order.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';

declare var $ : any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'restaurant'
  selector: 'cm-menu',  // <restaurant></restaurant>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './menu.component.html'
})


export class MenuComponent implements OnInit {  
  // Set our default values
  @Input() menu: Menu;
  curItem: Item;



  // TypeScript public modifiers
  constructor(
    private orderService: OrderService
  ) {

  }

  itemPopup(item: Item, $event) {
    $event.preventDefault();
    this.curItem = item;
    $('.cm-item-popup').fadeIn(100);
    $('.cm-black').fadeIn(100);
  };

  public ngOnInit() {
        $("#cm-res-2").hide();
        $('.cm-item-popup').hide();
        $('.cm-pic-popup').hide();
        $('.cm-black').hide();
        $('.cm-black-pic').hide();
        $('.cm-modify').hide();
        $('#info').hide();
        $('.cm-info-icon').hide();
        $('.cm-nav-qr').hide();

        $('#catalog a').click(function(){
          event.preventDefault();
          $(this).closest().children('a').children('h3').css("color","black");
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 100}, 200,'easeInOutExpo');
          // $(window).stop().animate({
          //   scrollTop: $($(this).attr('href')).offset().top
          // },100,'linear');
          $(this).children('h3').css("color","#ea7b21");

        });

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 228) {
                   $('#catalog').addClass("sc-catalog");
                 }else{
                   $('#catalog').removeClass("sc-catalog");
                   }
            });
         });
      
  }
}

