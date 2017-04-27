import { OrderHistoryComponent } from './orderHistory/orderHistory.component';

import { ContactComponent } from './contact';
import { CommentComponent } from './comment';
import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OrderDetailComponent } from './orderHistory/orderDetail';

export const myOrderComponents = [
  CommentComponent,
  ContactComponent,
  OrderDetailComponent,
  OrderHistoryComponent
]


@NgModule({
  declarations: [myOrderComponents],
  imports: [ // import Angular's modules
    SharedModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [myOrderComponents]
})
export class MyOrderModule {



}
