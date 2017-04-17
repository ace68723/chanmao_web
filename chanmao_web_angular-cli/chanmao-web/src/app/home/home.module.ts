import { RouterModule } from '@angular/router';

import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RestaurantListComponent } from '../restaurantList/restaurantList.component';



@NgModule({
  declarations: [RestaurantListComponent],
  imports: [ // import Angular's modules
  SharedModule,
  RouterModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[RouterModule,RestaurantListComponent]
})

export class HomeModule {


}
