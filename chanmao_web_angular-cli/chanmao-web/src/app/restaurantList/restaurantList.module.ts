import { RestaurantListComponent } from './restaurantList.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { SharedModule } from './../shared/shared.module';
import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ RestaurantListComponent],
  imports: [ // import Angular's modules
    RestaurantModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[RestaurantModule,RestaurantListComponent]
})

export class RestaurantListModule {


}
