(function ($) {

        $('.cm-login-black').hide(); 
        $('.cm-login').hide(); 
        $('.cm-password').hide(); 
        $('.cm-password-mes').hide(); 
        $('.cm-new-password').hide(); 
        $('.cm-newpass-mes').hide(); 
        $('.cm-signup').hide(); 
        $('.cm-welcome').hide();
        $('.cm-nav-qr').hide();

        $('#cm-close-black').height($('#cm-close-black').parent().height()-44);
        $('#cm-close-black').width($('#cm-close-black').parent().outerWidth());

  $(document).ready(function(){
        
  			// hide .navbar first
    		$("#cm-res-2").hide();
	    	// fade in .navbar
	    	$(function () {
	        	$(window).scroll(function () {
	                 // set distance user needs to scroll before we start fadeIn
	            	if ($(this).scrollTop() > 380) {
	               	 $('#cm-res-2').fadeIn();
	           		 } else {
	                	$('#cm-res-2').fadeOut();
	           		 }
	        	});
	   		 });

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 460) {
                   $('.cm-ad').addClass("cm-ad-fixed");
                 }else{
                   $('.cm-ad').removeClass("cm-ad-fixed");
                   }
            });
         });

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

        $(".cm-res-item").click(function(){
           $(window).attr("href", "order.html");
        });

        $(".cm-popup").css('top', ($(window).height() - $(".cm-popup").height())/2 + "px");
        $(".cm-popup").css('left', ($(window).width() - $(".cm-popup").width())/2 + "px");


        $(".cm-nav-login").click(function(){
          $('.cm-login-black').show(); 
          $('.cm-login').show(); 
        });

        $(".cm-btn-login").click(function(){
          $('.cm-login').show(); 
          $('.cm-signup').hide();
        });

        $(".cm-forget").click(function(){
          $('.cm-login').hide(); 
          $('.cm-password').show();
        });

        $(".cm-btn-signup").click(function(){
          $('.cm-login').hide(); 
          $('.cm-password').hide();
          $('.cm-signup').show();
        });

        $(".cm-btn-next").click(function(){
          $('.cm-password-mes').show(); 
          $('.cm-password').hide();
        });

        $(".cm-btn-welcome").click(function(){
          $('.cm-welcome').show(); 
          $('.cm-signup').hide();
        });

        $(".cm-btn-newpass").click(function(){
          $('.cm-newpass-mes').show(); 
          $('.cm-new-password').hide();
        });

        $(".cm-nav-app").hover(function(){
          $('.cm-nav-qr').show(); }
        ,
          function(){ $('.cm-nav-qr').hide(); 
        });

        $(".cm-btn-change").click(function(e){
          TBox(this);
        });

        $(".cm-res-address input").blur(function(e){
          RBox(this);
        });

        function TBox(obj) {
                var input = $(obj).parent().find("input");
                var span = $(obj).parent().find("span");
                input.attr('value', span.text()).show().focus();
                span.hide();}

        function RBox(obj) {
                var input = $(".cm-res-address input");
                var span = $(".cm-res-address span");
                span.text(input.val());
                span.show();
                input.hide();}


	});
	 }(jQuery));