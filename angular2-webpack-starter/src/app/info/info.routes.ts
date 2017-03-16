import {
  ContactComponent
} from './myOrder/contact';
import {
  CommentComponent
} from './myOrder/comment';
import {
  AboutComponent
} from './about';
import {
  FreshComponent
} from './fresh';
import {
  defaultUrlMatcher
} from '@angular/router/src/shared';
import {
  Routes
} from '@angular/router';
import {
  MyOrderComponent
} from './myOrder';
import {
  UserInfoComponent
} from './userInfo';
import {
  SecurityComponent
} from './security';
import {
  QuestionComponent
} from './question';

import {
  DataResolver
} from './app.resolver';
import {
  InfoComponent
} from '.';

export const infoComponents = [
  SecurityComponent,
  UserInfoComponent,
  MyOrderComponent,
  InfoComponent,
  QuestionComponent,
  FreshComponent,
  AboutComponent,
  ContactComponent,
  CommentComponent
]

export const INFO_ROUTES: Routes = [{
    path: '',
    component: InfoComponent,
    data: {
      title: 'info'
    },
    children: [{
        path: 'userinfo',
        pathMatch: 'full',
        component: UserInfoComponent,

      },
      {
        path: 'myorder',
        pathMatch: 'full',
        component: MyOrderComponent,
      },
      {
        path: 'security',
        pathMatch: 'full',
        component: SecurityComponent
      },
      {
        path: 'question',
        pathMatch: 'full',
        component: QuestionComponent
      },
      {
        path: 'fresh',
        pathMatch: 'full',
        component: FreshComponent
      },
      {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent
      },
    ],

  },

  // { path: 'userinfo',pathMatch: 'full', component: UserInfoComponent,outlet: 'info'},
  // { path: 'myorder',pathMatch: 'full', component: MyOrderComponent,outlet: 'info'},
  // { path: 'security',pathMatch: 'full', component: SecurityComponent,outlet: 'info'},
];
