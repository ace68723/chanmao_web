import { RouterModule } from '@angular/router';

import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RestaurantListModule } from '../restaurantList/restaurantList.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [ // import Angular's modules
    RestaurantListModule,
    FormsModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[RestaurantListModule]
})

export class HomeModule {


}
