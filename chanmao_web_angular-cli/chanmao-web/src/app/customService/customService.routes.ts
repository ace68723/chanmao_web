import {
  CustomServiceComponent
} from '.';
import {
  Routes
} from '@angular/router';
import {
  QuestionComponent
} from "./question";
import {
  FreshComponent
} from "./fresh";
import {
  AboutComponent
} from './about';



export const customServiceComponents = [
  QuestionComponent,
  FreshComponent,
  AboutComponent,
  CustomServiceComponent
]


export const CUSTOM_SERVICE_ROUTES: Routes = [{
    path: '',
    component: CustomServiceComponent,
    children: [
      {
        path: '',
        redirectTo: 'question'
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
      }
    ]
  },


];