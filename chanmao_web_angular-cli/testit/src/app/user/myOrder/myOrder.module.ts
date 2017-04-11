
import { ContactComponent } from './contact';
import { CommentComponent } from './comment';
import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const myOrderComponents = [
  CommentComponent,
  ContactComponent
]


@NgModule({
  declarations: [myOrderComponents,],
  imports: [ // import Angular's modules
    SharedModule,
    
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [myOrderComponents]
})
export class MyOrderModule {



}
