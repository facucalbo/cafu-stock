import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  public forma: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  validate(field: string) {
    return false;
  }
  
  save() {
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      })
    }

    const userData = this.forma.value;

    // if(responseIsOk) {
    //   this.router.navigate(['/auth/login']);
    // }
  }
}
