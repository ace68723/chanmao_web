import {
  NgModule,
} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '.';
import { LoginMainComponent } from './loginMain';
import { SignupComponent } from './signup';
import { NewPasswordMesComponent } from './newPassword/newPasswordMes';
import { SignupSuccessComponent } from './signupSuccess';
import { NewPasswordComponent } from './newPassword';
import { PasswordMesComponent } from './forgetPassword/passwordMes';
import { ForgetPasswordComponent} from './forgetPassword';

export const loginComponents = [
  LoginComponent,
  LoginMainComponent,
  SignupComponent,
  PasswordMesComponent,
  NewPasswordComponent,
  NewPasswordMesComponent,
  ForgetPasswordComponent,
  SignupSuccessComponent
]

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: 'login'} },
];

@NgModule({
  declarations: loginComponents,
  imports: [ // import Angular's modules
    SharedModule,
    // RouterModule.forChild(routes)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

],
exports: [loginComponents]
})



export class LoginModule {



}
