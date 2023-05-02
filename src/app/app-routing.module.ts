import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './client/contact/contact.component';
import { HomeComponent } from './client/home/home.component';
import { AboutMeComponent } from './client/about-me/about-me.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Portfolio', loadChildren: () => import('./client/portfolio/portfolio.module').then(module => module.PortfolioModule) },
  { path: 'Contact', component: ContactComponent },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'dashboard' , loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
