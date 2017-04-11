
import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

declare var $: any

@Component({
  selector: 'cm-customService',
  templateUrl: './customService.component.html'
})

export class CustomServiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
        
  }

}