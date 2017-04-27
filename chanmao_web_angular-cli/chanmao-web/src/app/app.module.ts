
import { OrderService } from './services/order.service';
import { SystemService } from './services/system.service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login';
import { PageNotFoundComponent } from './404';
import { RestaurantModule } from './restaurantList/restaurant/restaurant.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import {
  LoginModule
} from './login/login.module';
import {
  HomeModule
} from './home/home.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { FooterComponent } from './footer';
import { NavComponent } from './nav';


// Application wide providers
const APP_PROVIDERS = [
    SystemService,
    OrderService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PageNotFoundComponent
],
  imports: [ // import Angular's modules
    BrowserModule,
    // FormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    // InfoModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),


  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
  ]
})
export class AppModule {

  constructor(
  ) {}

}
