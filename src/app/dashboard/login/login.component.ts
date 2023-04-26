import { Component, OnInit } from '@angular/core';

import { Auth , signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;




  constructor(private auth:Auth ,    private fb: FormBuilder,  private router: Router ){

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
    )
  }

}
