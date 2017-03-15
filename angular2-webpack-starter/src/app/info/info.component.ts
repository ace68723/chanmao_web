
import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'cm-info',
  templateUrl: './info.component.html'
})

export class InfoComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
        $(document).on('click', '.cm-myorder', function() {
          $('#personal').hide();
          $('#security').hide();
          $('#myorder').fadeIn(100);
          $('.cm-myorder').addClass('cm-active');
          $('.cm-personal').removeClass('cm-active');
          $('.cm-security').removeClass('cm-active');
        });

        $(document).on('click', '.cm-security', function() {
          $('#personal').hide();
          $('#myorder').hide();
          $('#security').fadeIn(100);
          $('.cm-security').addClass('cm-active');
          $('.cm-personal').removeClass('cm-active');
          $('.cm-myorder').removeClass('cm-active');
        });

        $(document).on('click', '.cm-personal', function() {
          $('#security').hide();
          $('#myorder').hide();
          $('#personal').fadeIn(100);
          $('.cm-personal').addClass('cm-active');
          $('.cm-myorder').removeClass('cm-active');
          $('.cm-security').removeClass('cm-active');
        });
         $(document).on('click', '.cm-fresh', function() {
          $('#question').hide();
          $('#about').hide();
          $('#fresh').fadeIn(100);
          $('.cm-fresh').addClass('cm-active');
          $('.cm-question').removeClass('cm-active');
          $('.cm-about').removeClass('cm-active');
        });

        $(document).on('click', '.cm-about', function() {
          $('#question').hide();
          $('#fresh').hide();
          $('#about').fadeIn(100);
          $('.cm-about').addClass('cm-active');
          $('.cm-fresh').removeClass('cm-active');
          $('.cm-question').removeClass('cm-active');
        });

        $(document).on('click', '.cm-question', function() {
          $('#about').hide();
          $('#fresh').hide();
          $('#question').fadeIn(100);
          $('.cm-question').addClass('cm-active');
          $('.cm-fresh').removeClass('cm-active');
          $('.cm-about').removeClass('cm-active');
        });
  }

}