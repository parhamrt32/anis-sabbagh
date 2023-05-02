import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './client/about-me/about-me.component';
import { ContactComponent } from './client/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LibsModule } from './libs/libs.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,

  ],
  imports: [
    AppRoutingModule,
    LibsModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
