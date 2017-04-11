import {
  NgModule,
} from '@angular/core';
import { RouterModule} from '@angular/router';
import { COOPERATION_ROUTES, cooperationComponents} from './cooperation.routes';




@NgModule({
  declarations: cooperationComponents,
  imports: [ // import Angular's modules
    RouterModule.forChild(COOPERATION_ROUTES)
    
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [cooperationComponents,RouterModule]
})
export class CooperationModule {



}
