
import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

declare var $: any

@Component({
  selector: 'cm-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
        
  }

}