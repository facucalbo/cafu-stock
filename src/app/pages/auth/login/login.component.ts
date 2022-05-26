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
    
    this.userService.login(username, password)
      .subscribe( res => {
        if(!res.error) {
          this.router.navigate(['home']);
        }
        // res.headers.get('set-cookie')
      })
  }
}
