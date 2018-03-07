import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OceanService} from './ocean.service';
import {OceanProfileComponent} from './ocean-profile/ocean-profile.component';
import {OceanTwitterComponent} from './ocean-twitter/ocean-twitter.component';
import {FormsModule} from '@angular/forms';

import {
  MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, MatMenuModule,
  MatIconModule
} from '@angular/material';

import {OceanStoreService} from './ocean.store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    OceanProfileComponent,
    OceanTwitterComponent
  ],
  exports: [
    OceanProfileComponent,
    OceanTwitterComponent
  ]
})
export class OceanModule {

  static forRoot() {
    return {
      ngModule: OceanModule,
      providers: [
        OceanStoreService,
        OceanService
      ]
    };
  }
}