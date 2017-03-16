import { PageNotFoundComponent } from './404/pagenotfound.component';
import { Routes } from '@angular/router';
import { HomeComponent} from './home';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'restaurant1', loadChildren: './restaurant/restaurant.module#RestaurantModule'},
  // { path: 'login',loadChildren: './login/login.module#LoginModule' },
  { path: 'info',loadChildren: './info/info.module#InfoModule' },
  { path: '**',redirectTo: 'home'  }
];

