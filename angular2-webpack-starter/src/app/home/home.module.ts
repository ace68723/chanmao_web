import { RouterModule } from '@angular/router';

import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [ // import Angular's modules
  RouterModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
],
  exports:[RouterModule]
})

export class HomeModule {


}
