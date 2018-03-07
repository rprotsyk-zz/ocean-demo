import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {LandingComponent} from './landing/landing.component';
import {PersonaIntroComponent} from './persona-intro/persona-intro.component';
import {SpacerComponent} from './spacer/spacer.component';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule,
  MatIconModule
} from '@angular/material';
import 'hammerjs';

import { NotifyModule } from 'notify-angular';

import {OceanModule} from './ocean/ocean.module';
import {environment} from '../environments/environment';

import {SpinnerModule} from 'spinner-angular';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PersonaIntroComponent,
    SpacerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    NotifyModule.forRoot(),
    OceanModule.forRoot(),
    SpinnerModule.forRoot({
      animation: 'spin 1s ease-in-out infinite',
      primaryColor: '#3F51B5',
      secondaryColor: '#FF4081'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
