import { SharedModule } from '../shared/shared.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RESTAURANT_ROUTES,restaurantComponents} from './restaurant.routes';



@NgModule({
  declarations: [restaurantComponents],
  imports: [ // import Angular's modules
    RouterModule.forChild(RESTAURANT_ROUTES),
    SharedModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[restaurantComponents,RouterModule]
})

export class RestaurantModule {


}
