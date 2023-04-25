import { Component } from '@angular/core';
import { Auth , signInWithEmailAndPassword , sendPasswordResetEmail } from '@angular/fire/auth';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private auth:Auth , ){

  }

  logIn(){
    sendPasswordResetEmail(this.auth , 'parhambarati32@gmail.com' ).then( x => console.log(x)
   )
  }
}
