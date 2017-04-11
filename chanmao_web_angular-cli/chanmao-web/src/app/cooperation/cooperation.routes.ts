import {
  Routes
} from '@angular/router';

import {
  BusinessComponent
} from './business/';
import {
  DriverComponent
} from './driver';
import {
  CooperationComponent
} from ".";

export const cooperationComponents = [
  DriverComponent,
  BusinessComponent,
  CooperationComponent
]


export const COOPERATION_ROUTES: Routes = [

  {
    path: '',
    component: CooperationComponent,
    children: [{
        path: '',
        redirectTo: 'driver'
      },
      {
        path: 'driver',
        pathMatch: 'full',
        component: DriverComponent
      },
      {
        path: 'business',
        pathMatch: 'full',
        component: BusinessComponent
      }
    ]
  }
]