import {
  OrderHistory
} from './../models/orderHistory.model';
import {
  Injectable
} from '@angular/core'

@Injectable()
export class OrderHistoryService {
  private orderHistorys: Array < OrderHistory > =

    [{
      orderId: 123456,
      state: 0,
      name: '半亩园',
      date: '10/17/2017',
      details: {
        tax: 3.39,
        deliveryFee: 6,
        total: 39.39,
        dishes: [{
          name: 'XXXXX盖浇饭',
          number: 1,
          total: 10.00,
        }, {
          name: '茶树菇汤',
          number: 2,
          total: 20.00,
        }]
      },
      comments: {
        restaurant: {
          content: '',
          star: 0
        },
        delivery: {
          content: '',
          star: 0
        }
      }
    },
    {
      orderId: 222222,
      state: 1,
      name: '半亩园',
      date: '10/17/2016',
      details: {
        tax: 33.9,
        deliveryFee: 100,
        total: 433.9,
        dishes: [{
          name: 'XXXXX盖浇饭',
          number: 10,
          total: 100.00,
        }, {
          name: '茶树菇汤',
          number: 20,
          total: 200.00,
        }]
      },
      comments: {
        restaurant: {
          content: '',
          star: 0
        },
        delivery: {
          content: '',
          star: 0
        }
      }
    },
    {
      orderId: 999999,
      state: 2,
      name: '半亩园',
      date: '10/17/2014',
      details: {
        tax: 3.39,
        deliveryFee: 6,
        total: 39.39,
        dishes: [{
          name: 'XXXXX盖浇饭',
          number: 1,
          total: 10.00,
        }, {
          name: '茶树菇汤',
          number: 2,
          total: 20.00,
        }]
      },
      comments: {
        restaurant: {
          content: 'restaurant comment',
          star: 3
        },
        delivery: {
          content: 'delivery comment',
          star: 4
        }
      }
    },
    {
      orderId: 888888,
      state: 2,
      name: '半亩园',
      date: '10/17/2015',
      details: {
        tax: 3.39,
        deliveryFee: 7,
        total: 40.39,
        dishes: [{
          name: 'XXXXX盖浇饭',
          number: 2,
          total: 20.00,
        }, {
          name: '茶树菇汤',
          number: 1,
          total: 10.00,
        }]
      },
      comments: {
        restaurant: {
          content: '',
          star: 0
        },
        delivery: {
          content: '',
          star: 0
        }
      }
    }
    ]

    public getOrderHistory(): Array < OrderHistory > {
      return this.orderHistorys;
    }

}
