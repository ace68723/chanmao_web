import { Component, OnInit, Input } from '@angular/core';
import { OrderDetail } from '../../models/orderHistory.model';

@Component({
  selector: 'cm-order-detail',
  templateUrl: './orderDetail.component.html',
})
export class OrderDetailComponent implements OnInit {

  @Input() orderDetail: OrderDetail

  constructor() {
   }

  ngOnInit() {
  }

}
