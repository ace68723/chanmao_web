import {
  Component,
  OnInit,
  Input,
  AfterViewChecked
} from '@angular/core';

declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'login',

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html',
  // styleUrls: [
  //   ''
  // ]
})
export class LoginComponent implements OnInit,AfterViewChecked {
  // Set our default values
  public localState = { value: '' };


private JQlogin() {


        $('.cm-login-black').hide();
        $('.cm-login').hide();
        $('.cm-password').hide();
        $('.cm-password-mes').hide();
        $('.cm-new-password').hide();
        $('.cm-newpass-mes').hide();
        $('.cm-signup').hide();
        $('.cm-welcome').hide();


        $(document).mouseup(function (e)
        {
            var container = $(".cm-popup");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
                $('.cm-login-black').hide();
            }
        });

        $(".cm-popup").css('top', ($(window).height() - $(".cm-popup").outerHeight())/2 + "px");
        $(".cm-popup").css('left', ($(window).width() - $(".cm-popup").outerWidth())/2 + "px");


        // $(".cm-nav-login").click(function(){
        //   $('.cm-login-black').show();
        //   $('.cm-login').show();
        // });

        $(".cm-popup-login").click(function(){
          $('.cm-login').show();
          $('.cm-signup').hide();
        });

        $(".cm-forget").click(function(){
          $('.cm-login').hide();
          $('.cm-password').show();
        });

        $(".cm-popup-signup").click(function(){
          $('.cm-login').hide();
          $('.cm-password').hide();
          $('.cm-signup').show();
        });
        
        $(".cm-popup-newpass").click(function(){
          $('.cm-newpass-mes').show();
          $('.cm-new-password').hide();
        });

        $(".cm-nav-app").hover(function(){
          $('.cm-nav-qr').show(); }
        ,
          function(){ $('.cm-nav-qr').hide();
        });

}


  constructor(
  ) {

  }

  public ngOnInit() {
    this.JQlogin();
  }

  public ngAfterViewChecked(){

  }
}
