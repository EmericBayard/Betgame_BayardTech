import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
 
import { LiveTurnamentInfoPageRoutingModule } from './live-turnament-info-routing.module';

import { LiveTurnamentInfoPage } from './live-turnament-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    LiveTurnamentInfoPageRoutingModule
  ],
  declarations: [LiveTurnamentInfoPage]
})
export class LiveTurnamentInfoPageModule {}
