import { ItemComponent } from './menu/item/item.component';
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
import { CartComponent } from "./cart";
import { CompleteComponent } from './complete';


export const restaurantComponents = [
  MenuComponent,
  RestaurantInfoComponent,
  RestaurantComponent,
  CartComponent,
  CompleteComponent,
  ItemComponent
]

export const RESTAURANT_ROUTES: Routes = [{
    path: 'restaurant1',
    component: RestaurantComponent,
    data: {
      title: 'Restaurant'
    },
    children: [{
        path: 'info',
        pathMatch: 'full',
        component: RestaurantInfoComponent,

      },
      {
        path: 'menu',
        pathMatch: 'full',
        component: MenuComponent
      },

    ],
    },
      {

        path: 'cart',
        pathMatch: 'full',
        component: CartComponent,

      },
      {
        path: 'complete',
        pathMatch: 'full',
        component: CompleteComponent
      }

];
