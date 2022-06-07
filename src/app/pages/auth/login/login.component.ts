import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formSpans = {
    username: 'User not exists',
    password: 'Incorrect password',
  }
  // public formSpans = this.defaultSpans;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private cookieService: CookieService) { }

  public forma: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  validate(field: string) {
    return this.forma.controls[field].invalid && this.forma.controls[field].touched;
  }

  save() {
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      })
    }

    const {username, password} = this.forma.value;

    this.auth.login(username, password)
      .subscribe( res => {
        if(!res.error) {
          this.router.navigate(['home']);

          // this.cookieService.set(environment.credential_token, res.body.token, {path: '/', sameSite: 'None', secure: false} )
          // localStorage.setItem(environment.access_token, res.body.token);
          // localStorage.setItem(environment.refresh_token, res.body.refreshToken || '');
          // localStorage.setItem(environment.user_id, res.body.uid || '');

          return ;
        }
      })
  }
}
