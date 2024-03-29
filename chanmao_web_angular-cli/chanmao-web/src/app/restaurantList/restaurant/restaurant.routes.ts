import { CartItemComponent } from './cart/cartItems/';
import {
  ItemComponent
} from './menu/item/item.component';
import {
  MenuComponent
} from './menu';
import {
  RestaurantInfoComponent
} from './restaurantInfo';
import {
  RestaurantComponent
} from '.';

import {
  Routes
} from '@angular/router';
import {
  CartComponent
} from "./cart";
import {
  CompleteComponent
} from './complete';
import {
  CartItemsComponent
} from './cart/cartItems/cartItems.component';


export const restaurantComponents = [
  MenuComponent,
  RestaurantInfoComponent,
  RestaurantComponent,
  CartComponent,
  CompleteComponent,
  ItemComponent,
  CartItemsComponent,
  CartItemComponent
]

export const RESTAURANT_ROUTES: Routes = [
  {
    path: 'restaurants/:restaurantId',
    component: RestaurantComponent,
  },
  {
    path: 'restaurants/:restaurantId/cart',
    pathMatch: 'full',
    component: CartComponent,

  },
  {
    path: 'restaurants/:restaurantId/complete',
    pathMatch: 'full',
    component: CompleteComponent
  },
  {
    path: 'restaurants/:restaurantId/cart/back',
    pathMatch: 'full',
    redirectTo: 'restaurants/:restaurantId'
  },
  {
    path: 'restaurants/:restaurantId/cart/complete',
    pathMatch: 'full',
    redirectTo: 'restaurants/:restaurantId/complete'
  }

];
