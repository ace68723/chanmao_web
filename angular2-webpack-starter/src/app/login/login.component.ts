import {
  Component,
  OnInit
} from '@angular/core';


import {Option} from "./interfaces";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'login',  // <home></home>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

  option =  {
    loginMain : true,
    signup : false,
    forgetPassword : false,
    signupSuccess : false,
    newPasswordMes : false,
    newPassword : false,
    passwordMes : false
  }
  // login = true;
  // signup = false;
  // forgetPassword = false;
  // signupSuccess = false;

  // TypeScript public modifiers
  constructor(
  ) {

  }

  public ngOnInit() {

  }
}
