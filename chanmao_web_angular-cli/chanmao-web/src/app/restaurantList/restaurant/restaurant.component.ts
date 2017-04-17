import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';

declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'restaurant'
  selector: 'restaurant', // <restaurant></restaurant>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './restaurant.component.html'
})


export class RestaurantComponent implements OnInit {
  // Set our default values


  // TypeScript public modifiers
  restaurant:any

  constructor(private restaurantService:RestaurantService, private activatedRoute:ActivatedRoute) {

  }


  private JQfunction() {

    $("#cm-res-2").hide();
    $('.cm-item-popup').hide();
    $('.cm-pic-popup').hide();
    $('.cm-black').hide();
    $('.cm-black-pic').hide();
    $('.cm-modify').hide();
    $('#info').hide();
    $('.cm-info-icon').hide();
    $('.cm-nav-qr').hide();

    $(document).ready(function () {
      // hide .navbar first

      // fade in .navbar
      $(function () {
        $(window).scroll(function () {
          // set distance user needs to scroll before we start fadeIn
          if ($(this).scrollTop() > 300) {
            $('#cm-res-2').fadeIn();
          } else {
            $('#cm-res-2').fadeOut();
          }
        });
      });

      $("#btn-info").click(function () {
        $('#info').fadeIn(100);
        $('#menu').fadeOut(100);
        $('.cm-info-icon').fadeIn(100);
        $('.cm-menu-icon').fadeOut(100);
      });

      $("#btn-menu").click(function () {
        $('#menu').fadeIn(100);
        $('#info').fadeOut(100);
        $('.cm-menu-icon').fadeIn(100);
        $('.cm-info-icon').fadeOut(100);
      });

      $(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 510) {
            $('#catalog').addClass("sc-catalog");
          } else {
            $('#catalog').removeClass("sc-catalog");
          }
        });
      });

      $(".cm-item-popup").css('top', ($(window).height() - $(".cm-item-popup").height()) / 2 + "px");
      $(".cm-item-popup").css('left', ($(window).width() - $(".cm-item-popup").width()) / 2 + "px");

      $(".cm-pic-popup").css('top', ($(window).height() - $(".cm-pic-popup").height()) / 2 + "px");
      $(".cm-pic-popup").css('left', ($(window).width() - $(".cm-pic-popup").width()) / 2 + "px");

      $(document).mousedown(function (e) {

        if ($(e.target).closest('.cm-item-popup').length != 0) return false;
        $('.cm-item-popup').hide();
        $('.cm-black').hide();
      });

      $(document).mousedown(function (e) {
        if ($(e.target).closest('.cm-pic-popup').length != 0) return false;
        $('.cm-pic-popup').hide();
        $('.cm-black-pic').hide();
      });

      $(".cm-menu-dish").click(function () {
        $('.cm-item-popup').fadeIn(100);
        $('.cm-black').fadeIn(100);
      });

      $(".cm-menu-pic").click(function () {
        $('.cm-pic-popup').fadeIn(100);
        $('.cm-black-pic').fadeIn(100);
      });

      $(".cm-cart-item").hover(
        function () {
          $(this).children('.cm-modify').show();
        },
        function () {
          $(this).children('.cm-modify').hide();
        }
      );

      $('#catalog a').click(function () {
        event.preventDefault();
        $('#menu').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 80
        }, 100, 'linear');

      });
    })
  }

  public ngOnInit() {
    this.JQfunction();
      this.restaurant = this.restaurantService.getRestaurant(+this.activatedRoute.snapshot.params['restaurantId'])
  }
}
