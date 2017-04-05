/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,

} from '@angular/core';
import {
  AppState
} from './app.service';



declare var $: any;

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  // styleUrls: [
  //   './login/chanmao-popup.css',
  // ],
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
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



/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
