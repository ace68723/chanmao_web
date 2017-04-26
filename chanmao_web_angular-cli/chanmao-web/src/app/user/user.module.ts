import { SharedModule } from '../shared/shared.module';
import { MyOrderModule } from './myOrder/myOrder.module';
import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { USER_ROUTES, userComponents} from './user.routes';
import { AddressModule } from '../shared/address.module';




@NgModule({
  declarations: [userComponents],
  imports: [ // import Angular's modules
    RouterModule.forChild(USER_ROUTES),
    MyOrderModule,
    SharedModule,
    AddressModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [userComponents,RouterModule,MyOrderModule, AddressModule]
})
export class UserModule {



}
