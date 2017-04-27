import { RestaurantListComponent } from './restaurantList.component';
import {
  NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';
// import { SearchPipe } from './pipe/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantService } from './service/restaurant.service';



@NgModule({
  declarations: [ RestaurantListComponent],
  imports: [ // import Angular's modules
  RestaurantModule,
  ],
  providers: [ 
    RestaurantService,
    // expose our Services and Providers into Angular's dependency injection
],
  exports:[RestaurantListComponent]
})

export class RestaurantListModule {


}
