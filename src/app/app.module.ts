import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { WelcomeImageComponent } from './components/views/welcome-image/welcome-image.component';
import { ServicesComponent } from './components/views/services/services.component';
import { interval,timer } from 'rxjs';
import { AboutComponent } from './components/views/about/about.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { FooterComponent } from './components/views/footer/footer.component';
import { EnvioService } from './servicio/envio.service';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MouseHoverDirective } from './shared/mouse-hover.directive'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeImageComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MouseHoverDirective,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
