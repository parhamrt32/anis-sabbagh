import { Component, OnInit } from '@angular/core';

import { Auth , signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;




  constructor(private auth:Auth ,    private fb: FormBuilder,  private router: Router ,  private _snackBar: MatSnackBar, ){

    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }



  ngOnInit(): void {

  }

  logIn(){
    const { email, password } = this.loginForm?.value;
    signInWithEmailAndPassword(this.auth , email , password).then( () => {
      this.router.navigate(['dashboard'])
    }
    ).catch( (err) => {
      this._snackBar.open(
        err,
        'Cancle',
        {
          duration: 2000,
          panelClass: ['snackbar-font'],
          horizontalPosition: 'right',
          verticalPosition: 'top',
        }
      );
    } )
  }

}
