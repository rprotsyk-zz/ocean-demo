import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanService } from './ocean.service';
import { OceanProfileComponent } from './ocean-profile/ocean-profile.component';
import { OceanTwitterComponent } from './ocean-twitter/ocean-twitter.component';
import { FormsModule } from '@angular/forms';

import {
  MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, MatMenuModule,
  MatIconModule
} from '@angular/material';

import { OceanStoreService } from './ocean.store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { SpacerComponent } from '../spacer/spacer.component';
import { ChartsModule } from 'ng2-charts';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DescriptionComponent } from '../description/description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [
    OceanProfileComponent,
    OceanTwitterComponent,
    AvatarComponent,
    DescriptionComponent,
    SectionHeaderComponent,
  ],
  exports: [
    OceanProfileComponent,
    OceanTwitterComponent,
    SectionHeaderComponent,
    AvatarComponent
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
