/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,

} from '@angular/core';



declare var $: any;

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'cm-app',
  encapsulation: ViewEncapsulation.None,
  // styleUrls: [
  //   './login/chanmao-popup.css',
  // ],
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {

  constructor(
  ) {}


  private JQfunction() {

    $('.cm-nav-qr').hide();
    $('.cm-black').hide();

    $(document).ready(function () {

      // hide .navbar first
      $('#cm-res-2').hide();
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

      $('.cm-nav-app').hover(function () {
          $('.cm-nav-qr').show();
        },
        function () {
          $('.cm-nav-qr').hide();
        });

        // current location

      $('.cm-btn-change').click(function(e){
          TBox(this);
        });

      $('.cm-res-address input').blur(function(e){
          RBox(this);
        });

      function TBox(obj) {
                let input = $(obj).parent().find('input');
                let span = $(obj).parent().find('span');
                input.attr('value', span.text()).show().focus();
                span.hide(); }

      function RBox(obj) {
                let input = $('.cm-res-address input');
                let span = $('.cm-res-address span');
                span.text(input.val());
                span.show();
                input.hide(); }

      $('.cm-nav-app').hover(function(){
                  $('.cm-nav-qr').show(); }
                ,
                  function(){ $('.cm-nav-qr').hide();
                });

    });

  }



  public ngOnInit() {
    this.JQfunction();
  }

}



