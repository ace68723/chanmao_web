import { NgModule } from '@angular/core';
import { AddressComponent } from '../address/address.component';


// imports: imports the module's exports. which are usually
// declarables(components / directives / pipes) and providers.
// in our case the FilterTextModule has a provider.
//
// exports: exports modules AND declarables (components/directives/pipes) that other modules may want to use
// SharedModule does not use CommonModule, but does use FormsModule.
// Even so, we import/export both of these because most other modules will import SharedModule and will need them.
@NgModule({
  imports: [],

  declarations: [
    AddressComponent
  ],
  exports: [AddressComponent]
})
export class AddressModule { }
