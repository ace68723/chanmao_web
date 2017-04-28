import { UserComponent } from './user.component';
import {
  Routes
} from '@angular/router';
import { UserInfoComponent } from "./userInfo";
import { MyOrderComponent } from "./myOrder";
import { SecurityComponent } from "./security";



export const userComponents = [
  UserInfoComponent,
  // MyOrderComponent,
  SecurityComponent,
  UserComponent
]


export const USER_ROUTES: Routes = [{
    path: '',
    component: UserComponent,
    children: [ 
      {
        path: '',
        redirectTo: 'myorder'
      },
      {
        path: 'userinfo',
        pathMatch: 'full',
        component: UserInfoComponent,
      },
      {
        path: 'myorder',
        pathMatch: 'full',
        loadChildren: './myOrder/myOrder.module#MyOrderModule'
      },
      {
        path: 'security',
        pathMatch: 'full',
        component: SecurityComponent
      },
    ]

    
  },
  
];