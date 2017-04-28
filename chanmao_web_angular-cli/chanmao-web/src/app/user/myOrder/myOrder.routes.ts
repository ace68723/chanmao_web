import {
  MyOrderComponent
} from ".";
import {
  Routes
} from '@angular/router';




export const MYORDER_ROUTES: Routes = [
  {
        path: '',
        pathMatch: 'full',
        component: MyOrderComponent,
  }
];
