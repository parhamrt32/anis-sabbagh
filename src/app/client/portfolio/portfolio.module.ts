import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { LibsModule } from '../../libs/libs.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
     // Import the CommonModule instead of BrowserModule
    LibsModule,
    ReactiveFormsModule,
    provideStorage(() => getStorage()),
    RouterModule.forChild(routes),
  ],
})
export class PortfolioModule {}
