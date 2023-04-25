import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {  redirectLoggedInTo, redirectUnauthorizedTo , AuthGuard } from '@angular/fire/auth-guard';

const redirectLoggedInToSendEmail = () => redirectLoggedInTo(['Home']);

const routes : Routes =[
  {
    path:'',
    component : LoginComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToSendEmail }
  }

]


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
