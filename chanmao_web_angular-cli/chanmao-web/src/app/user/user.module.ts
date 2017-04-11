import { SharedModule } from '../shared/shared.module';
import { MyOrderModule } from './myOrder/myOrder.module';
import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { USER_ROUTES, userComponents} from './user.routes';




@NgModule({
  declarations: userComponents,
  imports: [ // import Angular's modules
    RouterModule.forChild(USER_ROUTES),
    MyOrderModule,
    SharedModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [userComponents,RouterModule,MyOrderModule]
})
export class UserModule {



}
