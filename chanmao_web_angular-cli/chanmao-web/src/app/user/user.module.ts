import { SharedModule } from '../shared/shared.module';
import { MyOrderModule } from './myOrder/myOrder.module';
import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { USER_ROUTES, userComponents} from './user.routes';
import { OrderHistoryService } from './myOrder/service/orderHistory.service';
import { AddressModule } from '../shared/address.module';




@NgModule({
  declarations: [userComponents],
  imports: [ // import Angular's modules
    // MyOrderModule,
    AddressModule,
    // SharedModule,
    RouterModule.forChild(USER_ROUTES),
    
      ],
  providers: [ 
    OrderHistoryService,
    // expose our Services and Providers into Angular's dependency injection

],
exports: []
})
export class UserModule {



}
