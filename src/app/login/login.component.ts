import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  subscription: Subscription;
  loginForm: FormGroup;

  constructor(private loginSevice: LoginService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ])
    });
  }

  onLogin() {
    this.subscription = this.loginSevice.login(this.loginForm.value)
      .subscribe(
        data => console.log(data),
        err => console.log(err.message)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
