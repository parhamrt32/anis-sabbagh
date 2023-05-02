import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from 'app/libs/libs.module';
import {  RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path : '',
    component : PortfolioComponent
  }
]


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    LibsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
