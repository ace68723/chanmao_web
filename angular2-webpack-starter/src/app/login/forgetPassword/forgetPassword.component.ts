import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  OnChanges
} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { emailValidator } from '../signup/validators/validators';

declare let $: any;

@Component({
  selector: 'forget-password',
  styleUrls: [`https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
  `],
  templateUrl: 'forgetPassword.component.html'
})
export class ForgetPasswordComponent implements OnInit {

  private forgetPasForm: FormGroup;
  private email: FormControl = new FormControl('', Validators.compose(
    [Validators.required, emailValidator]));

  private isEmailValid;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
  ) {
    this.forgetPasForm = new FormGroup({
      email: this.email
    })
  }

  public forgetPas(formValues){
     this.isEmailValid = false;
     if(this.isEmailValid ){
       this.next();
     }
  }

  public ngOnInit() {
    this.isEmailValid = true;
    this.forgetPasForm.valueChanges.subscribe(data => {
      this.isEmailValid = true;
    })
  }


  public next(){
    $(".cm-popup-next").click(function(){
          $('.cm-password-mes').show();
          $('.cm-password').hide();
        });
  }

}
