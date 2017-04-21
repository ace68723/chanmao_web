import { Item } from '../restaurantList/restaurant.model';
import {
  Injectable
} from '@angular/core';

@Injectable()
export class OrderService {
    private curItem: Item;
    private curRestaurantID: number
    private orderMap: string;
  constructor() {
  }


}