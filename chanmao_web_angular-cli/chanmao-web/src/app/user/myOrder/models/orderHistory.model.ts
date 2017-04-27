export interface OrderHistory {
  orderId: number;
  state: number;
  name: string;
  date: string;
  details: OrderDetail;
  comments: {
    restaurant: Comment,
    delivery: Comment
  };
}

export interface Dish {
  name: string;
  number: number;
  total: number;
}

export interface OrderDetail {
  tax: number;
  deliveryFee: number;
  total: number;
  dishes: Array < Dish > ;
}


export interface Comment {
  content: string;
  star: number;
}
