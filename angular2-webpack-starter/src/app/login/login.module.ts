import {
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginMainComponent } from './loginMain';
import { SignupComponent } from './signup';
import { NewPasswordMesComponent } from './newPasswordMes';
import { SignupSuccessComponent } from './signupSuccess';
import { NewPasswordComponent } from './newPassword';
import { PasswordMesComponent } from './passwordMes';
import { ForgetPasswordComponent} from './forgetPassword';

export const loginComponents = [
  LoginMainComponent,
  SignupComponent,
  PasswordMesComponent,
  NewPasswordComponent,
  NewPasswordMesComponent,
  ForgetPasswordComponent,
  SignupSuccessComponent
]

@NgModule({
  declarations: loginComponents,
  imports: [ // import Angular's modules
    FormsModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: loginComponents
})
export class LoginModule {



}
