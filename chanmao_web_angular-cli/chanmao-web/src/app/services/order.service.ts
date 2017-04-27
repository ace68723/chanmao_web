import {
  Item,
  Menu,
  RestaurantBaseInfo
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
  private restaurantHistoryStack: Array < RestaurantBaseInfo > ;

  private orderQuantity: number;
  private totalAmount: number;
  private curRestaurantID: number;
  private deliveryFee: number;


  constructor() {
    this.init();
    this.curRestaurantID = -1;
    this.restaurantHistoryStack = [];
  }

  init(): void {
    this.orderMap = new Map();
    this.orderQuantity = 0;
    this.totalAmount = 0;
    this.deliveryFee = 5;
  }
  addCartItem(cartItem: OrderItem, note ? : string): void {
    let orderItem: OrderItem = this.orderMap.get(cartItem.id);
    if (orderItem) {
      ++orderItem.quantity;
      this.totalAmount += cartItem.price;
      this.orderMap.set(cartItem.id, orderItem);
      ++this.orderQuantity;
    }
  }

  deleteCartItem(cartItem: OrderItem, all: boolean = false, note ? : string): void {
    let orderItem: OrderItem = this.orderMap.get(cartItem.id);
    if (orderItem) {
      if (all) {
        this.orderQuantity -= orderItem.quantity;
        this.totalAmount -= cartItem.price * orderItem.quantity;
        this.orderMap.delete(cartItem.id);
        return;
      }
      if (orderItem.quantity === 1) {
        return;
      }
      this.totalAmount -= cartItem.price;
      --this.orderQuantity;
      --orderItem.quantity;
      this.orderMap.set(cartItem.id, orderItem);
    }
  }


  addOrderItem(item: Item, note ? : string): void {
    let orderItem: OrderItem = {
      id: -1,
      quantity: 0,
      price: 0,
      note: '',
      name: ''
    };
    if (note) {
      orderItem.note = note;
    }
    orderItem.id = item.id;
    orderItem.price = item.price;
    orderItem.name = item.name;
    this.totalAmount += item.price;
    if (this.isItemInOrder(item)) {
      orderItem = this.orderMap.get(item.id);
      ++orderItem.quantity;
    } else {
      orderItem.quantity = 1;
    }
    this.orderMap.set(item.id, orderItem);
    ++this.orderQuantity;
  }

  deleteOrderItem(item: Item, all: boolean = false): void {
    let orderItem: OrderItem = {
      id: -1,
      quantity: 0,
      price: 0,
      note: '',
      name: ''
    };
    if (this.isItemInOrder(item)) {
      orderItem = this.orderMap.get(item.id);
      if (all) {
        this.orderQuantity -= orderItem.quantity;
        this.totalAmount -= item.price * orderItem.quantity;
        this.orderMap.delete(item.id);
        return;
      }
      if (orderItem.quantity < 1) {
        return;
      }
      // if (this.orderQuantity > 0) { // may be unnecessary
      //   --this.orderQuantity;
      // }
      this.totalAmount -= item.price;
      if (orderItem.quantity < 2) {
        this.orderMap.delete(item.id);
        return;
      }
      --orderItem.quantity;
      this.orderMap.set(item.id, orderItem);
      return;
    }
  }

  isItemInOrder(item: Item): boolean {
    if (item == null) {
      return false;
    }
    if (this.orderMap.has(item.id)) {
      return true;
    }
    return false;
  }

  getOrderItemQuantity(item: Item): number {
    if (this.isItemInOrder(item)) {
      return this.orderMap.get(item.id).quantity;
    }
  }

  getOrderTotal(item: Item): string {
    return this.totalAmount.toFixed(2);
  }

  getOrderList(): Array < OrderItem > {
    return Array.from(this.orderMap.values());
  }

  getOrderQuantity(): number {
    return this.orderQuantity;
  }

  getCurRestaurantID(): number {
    // console.log(this.curRestaurantID);
    return this.curRestaurantID;
  }
  setCurRestaurantID(id: number): void {
    if (this.curRestaurantID != id) {
      this.init();
    }
    this.curRestaurantID = id;

  }

  getDeliveryFee(): number {
    return this.deliveryFee;
  }

  addRecentViewRestaurant(restaurantBaseInfo: RestaurantBaseInfo): void {
    this.restaurantHistoryStack = this.restaurantHistoryStack.filter(function (e) {
      return e.id !== restaurantBaseInfo.id;
    })
    this.restaurantHistoryStack.push(restaurantBaseInfo);
  }
  getRecentViewRestaurants(n: number): Array < RestaurantBaseInfo > {
    let result: Array < RestaurantBaseInfo > = [];
    let copy: Array < RestaurantBaseInfo > = [];
    let curRestaurantHistorys: number = n + 1;
    if (this.restaurantHistoryStack.length < curRestaurantHistorys) {
      curRestaurantHistorys = this.restaurantHistoryStack.length;
    }
    for (let i = 0; i < curRestaurantHistorys; i++) {
      let restaurantHistory = this.restaurantHistoryStack.pop();
      result.push(restaurantHistory);
      copy.push(restaurantHistory);
    }
    for (let i = 0; i < curRestaurantHistorys; i++) {
      this.restaurantHistoryStack.push(copy.pop());
    }
    result.shift();
    return result;
  }
}
