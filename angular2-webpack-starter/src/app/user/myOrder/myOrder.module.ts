import { ContactComponent } from './contact';
import { CommentComponent } from './comment';
import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';

export const myOrderComponents = [
  CommentComponent,
  ContactComponent
]


@NgModule({
  declarations: myOrderComponents,
  imports: [ // import Angular's modules
    
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [myOrderComponents]
})
export class MyOrderModule {



}
