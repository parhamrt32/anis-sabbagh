import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './client/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';
import { AboutMeComponent } from './client/about-me/about-me.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'login' , loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
