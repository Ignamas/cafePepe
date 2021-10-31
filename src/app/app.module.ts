import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { WelcomeImageComponent } from './components/views/welcome-image/welcome-image.component';
import { ServicesComponent } from './components/views/services/services.component';
import { interval,timer } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeImageComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
