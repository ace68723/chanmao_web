
import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';

declare var $: any

@Component({
  selector: 'cm-cooperation',
  templateUrl: './cooperation.component.html'
})

export class CooperationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
        
  }

}