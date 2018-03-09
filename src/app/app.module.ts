import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PersonaIntroComponent } from './persona-intro/persona-intro.component';

import { ConsumersBehaviorComponent } from '../app/consumers-behavior/consumers-behavior.component';
import { SocialMediaComponent } from '../app/social-media/social-media.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule,
  MatIconModule
} from '@angular/material';
import 'hammerjs';
import { MnFullpageModule } from 'ngx-fullpage';
import { ChartsModule } from 'ng2-charts';

import { NotifyModule } from 'notify-angular';

import { OceanModule } from './ocean/ocean.module';
import { environment } from '../environments/environment';

import { SpinnerModule } from 'spinner-angular';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SpacerComponent } from './spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PersonaIntroComponent,
    ConsumersBehaviorComponent,
    SocialMediaComponent,
    PersonaIntroComponent,
    SpacerComponent
  ],
  imports: [
    HttpClientModule,
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
    MnFullpageModule.forRoot(),
    NotifyModule.forRoot(),
    OceanModule.forRoot(),
    FlexLayoutModule,
    SharedModule,
    ChartsModule,
    SpinnerModule.forRoot({
      animation: 'spin 1s ease-in-out infinite',
      primaryColor: '#3F51B5',
      secondaryColor: '#FF4081'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
