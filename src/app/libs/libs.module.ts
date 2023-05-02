import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavBarComponent, LoadingComponent, FooterComponent,],
  imports: [
    MatIconModule,
    RouterModule ,
    CommonModule,

  ],
  exports: [
    NavBarComponent,
    LoadingComponent,
    FooterComponent
  ]
})
export class LibsModule { }
