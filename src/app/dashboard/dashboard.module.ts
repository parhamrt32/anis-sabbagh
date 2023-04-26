import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {  redirectLoggedInTo, redirectUnauthorizedTo , AuthGuard } from '@angular/fire/auth-guard';
import { getStorage, provideStorage } from '@angular/fire/storage';

const redirectLoggedInToSendEmail = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['dashboard/login'])


const routes : Routes =[
  {
    path:'login',
    component : LoginComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToSendEmail ,  }
  },
  {
    path:'',
    component : DashboardComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },


]


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    MatTabsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    provideStorage(() => getStorage()),

  ]
})
export class DashboardModule { }
