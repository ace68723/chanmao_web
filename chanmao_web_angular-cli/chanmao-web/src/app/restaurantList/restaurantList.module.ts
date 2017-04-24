import { RestaurantListComponent } from './restaurantList.component';
import { SearchPipe } from './pipe/search.pipe';
import { RestaurantModule } from './restaurant/restaurant.module';
import { SharedModule } from './../shared/shared.module';
import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchPipe, RestaurantListComponent],
  imports: [ // import Angular's modules
    SharedModule,
    RestaurantModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[RestaurantModule,RestaurantListComponent]
})

export class RestaurantListModule {


}
