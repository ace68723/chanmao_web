import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { CUSTOM_SERVICE_ROUTES, customServiceComponents} from './customService.routes';




@NgModule({
  declarations: customServiceComponents,
  imports: [ // import Angular's modules
    RouterModule.forChild(CUSTOM_SERVICE_ROUTES)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: []
})
export class CustomServiceModule {



}
