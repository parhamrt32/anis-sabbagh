import { NgModule } from '@angular/core';
import { CommonModule, provideImageKitLoader } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from 'app/libs/libs.module';
import {  RouterModule, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

const routes : Routes = [
  {
    path : '',
    component : PortfolioComponent
  }
]


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    NgOptimizedImage,
    LibsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PortfolioComponent
  ],
  providers : [
    provideImageKitLoader("https://ik.imagekit.io/9nftpp6fp/o/")
  ]
})
export class PortfolioModule { }
