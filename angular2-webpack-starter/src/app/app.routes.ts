import { PageNotFoundComponent } from './404/pagenotfound.component';
import { Routes } from '@angular/router';
import { HomeComponent} from './home';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'restaurant1', loadChildren: './restaurant/restaurant.module#RestaurantModule'},
  { path: 'user',loadChildren: './user/user.module#UserModule' },
  { path: 'customservice',loadChildren: './customService/customService.module#CustomServiceModule' },
  { path: 'cooperation',loadChildren: './cooperation/cooperation.module#CooperationModule' },
  // { path: '**',redirectTo: 'home'  }
];

