import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

declare var $ : any

@Component({
  selector: 'cm-my-order',
  styles: [`
  `],
  templateUrl: 'myOrder.html'
})
export class MyOrderComponent implements OnInit {


  public localState: any;
  constructor(
     private router:Router,
  ) {}

  private JQfunction(){
          $('.cm-myorder').addClass('cm-active');
          $('.cm-personal').removeClass('cm-active');
          $('.cm-security').removeClass('cm-active');

        $('.cm-black').hide();       
        $('.cm-comment-popup').hide();
        $('.less4-res').hide();
        $('.less4-driver').hide();
        $('.cm-nav-qr').hide();
        $('.cm-contact-popup').hide();

  		$(document).ready(function(){
  			// hide .navbar first
        
	    	// fade in .navbar

        $(".cm-comment-popup").css('top', ($(window).height() - $(".cm-comment-popup").height())/2 + "px");
        $(".cm-comment-popup").css('left', ($(window).width() - $(".cm-comment-popup").width())/2 + "px");

        $(".cm-contact-popup").css('top', ($(window).height() - $(".cm-contact-popup").height())/2 + "px");
        $(".cm-contact-popup").css('left', ($(window).width() - $(".cm-contact-popup").width())/2 + "px");

        $(".cm-btn-comment").click(function(){
           $('.cm-comment-popup').fadeIn(100);
           $('.cm-black').fadeIn(100);
        });

        $(".cm-btn-contact").click(function(){
          $('.cm-black').fadeIn(100); 
          $('.cm-contact-popup').fadeIn(100); 
        });

        $(document).mouseup(function (e)
        {
            var container = $(".cm-service-popup");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
                $('.cm-black').hide();
            }
        });

        $(".cm-btn-reminder").click(function(){
          $('.cm-btn-reminder').css("background-color","#999999"); 
          $('.cm-btn-reminder').text("已催单"); 

        });


        $('.cm-btn-complain').click(function() { 
          $(this).toggleClass('active');
        });

        
       
          $("#rateYo-res").rateYo({
            rating: 0,
            starWidth: "20px",
            fullStar: true
          });

          $("#rateYo-driver").rateYo({
            rating: 0,
            starWidth: "20px",
            fullStar: true
          });

          $("#rateYo-read").rateYo({
            rating: 2,
            starWidth: "20px",
            fullStar: true,
            readOnly: true
          });

          $("#rateYo-res").rateYo().on("rateyo.set", function (e, data) {
                if($("#rateYo-res").rateYo().rateYo("rating")< 5 )
                  $('.less4-res').show();
                else $('.less4-res').hide();
          });

          $("#rateYo-driver").rateYo().on("rateyo.set", function (e, data) {
                if($("#rateYo-driver").rateYo().rateYo("rating")< 5 )
                  $('.less4-driver').show();
                else $('.less4-driver').hide();
          });
 
          $(".cm-btn-submit").click(function () {
         
            /* get rating */
            var ratingRes = $("#rateYo-res").rateYo().rateYo("rating");
            var ratingDriver = $("#rateYo-driver").rateYo().rateYo("rating");

          });

     

    }
      )}


  public ngOnInit() {
    this.JQfunction();
  }


}
