import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
// import { InfoComponent } from './info';
// import { INFO_ROUTES } from './info/info.routes';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'login',loadChildren: './login/login.module#LoginModule' },
  // { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'info',loadChildren: './info/info.module#InfoModule' }
];
// redirectTo: 'dashboard'
