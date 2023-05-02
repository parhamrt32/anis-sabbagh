import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LazyImgDirective } from './Directives/lazy-img-directive.directive';
import { LoadingComponent } from './loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonateComponent } from './donate/donate.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LazyImgDirective,
    NavBarComponent,
    LoadingComponent,
    FooterComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports : [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    LazyImgDirective,
    NavBarComponent,
    LoadingComponent,
    FooterComponent,
    DonateComponent]

})
export class LibsModule { }
