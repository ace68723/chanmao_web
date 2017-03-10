import { Routes } from '@angular/router';
import { LoginComponent } from './login';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];
