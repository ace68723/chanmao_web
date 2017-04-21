import {
  Item,
  Menu
} from '../restaurantList/restaurant.model';
import {
  OrderItem
} from '../models/order.model';
import {
  Injectable
} from '@angular/core';

@Injectable()
export class OrderService {
  private curOrderItem: OrderItem;

  private curMenu: Menu;
  private orderMap: Map < number, OrderItem > ;
  private orderQuantity: number;
  constructor() {
    this.orderMap = new Map();
    this.orderQuantity = 0;
  }


  addOrderItem(item: Item, note?: string): void {
    let orderItem: OrderItem = {
      id: -1,
      quantity: 0,
      price: 0,
      note: ''
    };
    if (note) {
      orderItem.note = note;
    }
    if (this.isItemInOrder(item)) {
      orderItem = this.orderMap.get(item.id);
      orderItem.id = item.id;
      ++orderItem.quantity;
      orderItem.price = item.price;
    } else {
      orderItem.id = item.id;
      orderItem.quantity = 1;
      orderItem.price = item.price;
    }
    this.orderMap.set(item.id, orderItem);
    ++this.orderQuantity;
  }

  deleteOrderItem(item: Item): void {
    let orderItem: OrderItem = {
      id: -1,
      quantity: 0,
      price: 0,
      note: ''
    };
    if (this.isItemInOrder(item)) {
      orderItem = this.orderMap.get(item.id); 
      if (orderItem.quantity < 1) {
        return;
      }
      if (this.orderQuantity > 0) { // may be unnecessary
        --this.orderQuantity;
      }

      if (orderItem.quantity < 2) {
        this.orderMap.delete(item.id);
        return;
      }
      --orderItem.quantity;
      this.orderMap.set(item.id, orderItem);
      return;
    }
  }

  isItemInOrder(item: Item): boolean{
    if(item == null){
      return false;
    }
    if (this.orderMap.has(item.id)) {
      return true;
    }
    return false;
  }

  getOrderItemQuantity(item: Item) : number{
    if (this.isItemInOrder(item)) {
      return this.orderMap.get(item.id).quantity; 
    }
  }

}
