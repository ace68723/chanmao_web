import { SharedModule } from './../../shared/shared.module';
import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RESTAURANT_ROUTES,restaurantComponents} from './restaurant.routes';
import { SearchPipe } from '../pipe/search.pipe';


@NgModule({
  declarations: [SearchPipe,restaurantComponents],
  imports: [ // import Angular's modules
    RouterModule.forChild(RESTAURANT_ROUTES),
    SharedModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[restaurantComponents,RouterModule,SharedModule,SearchPipe,]
})

export class RestaurantModule {


}
