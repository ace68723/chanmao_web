import { OrderHistoryService } from './../service/orderHistory.service';
import { OrderHistory } from './../models/orderHistory.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-order-history',
  templateUrl: './orderHistory.component.html',
})
export class OrderHistoryComponent implements OnInit {

  @Input() orderHistory: OrderHistory 
  private orderHistorys: Array < OrderHistory >

  constructor() {
   }

  ngOnInit() {
  }

}
