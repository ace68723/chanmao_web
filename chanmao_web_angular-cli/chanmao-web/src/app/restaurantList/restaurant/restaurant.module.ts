import { SharedModule } from './../../shared/shared.module';
import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RESTAURANT_ROUTES,restaurantComponents} from './restaurant.routes';
// import { SearchPipe } from '../pipe/search.pipe';
// import { MapValuesPipe } from '../pipe/mapValue.pipe';
import { AddressModule } from '../../shared/address.module';

@NgModule({
  declarations: [restaurantComponents],
  imports: [ // import Angular's modules
    SharedModule,
    AddressModule,
    RouterModule.forChild(RESTAURANT_ROUTES),
  ],
  providers: [ 
    // expose our Services and Providers into Angular's dependency injection
],
  exports:[RouterModule,SharedModule]
})

export class RestaurantModule {


}
