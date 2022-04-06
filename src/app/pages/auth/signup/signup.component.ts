import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public formSpans = {
    name: 'More than 2 characters',
    email: 'Insert a valid email',
    username: 'More than 4 characters',
    password: 'More than 8 characters',
    password2: 'Passwords do not coincide'
  }
  // public formSpans = this.defaultSpans;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  public forma: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', Validators.required],
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

    const userData = this.forma.value;

    this.userService.addNewUser(userData)
      .subscribe( response => {
        if(response.body.alredyExist) {
          this.forma.controls['username'].reset();
          document.getElementById('username')?.focus();
          this.forma.controls['username'].markAsTouched();
          this.formSpans.username = 'User alredy exist';
        } else {
          this.router.navigate(['/auth/login']);
        }
      })

    // if(responseIsOk) {
    //   this.router.navigate(['/auth/login']);
    // }
  }
}
