import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { INFO_ROUTES, infoComponents} from './info.routes';




@NgModule({
  declarations: infoComponents,
  imports: [ // import Angular's modules
    SharedModule,
    RouterModule.forChild(INFO_ROUTES)
    
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [infoComponents,RouterModule]
})
export class InfoModule {



}
