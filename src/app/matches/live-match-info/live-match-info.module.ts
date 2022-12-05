import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
 
import { LiveMatchInfoPageRoutingModule } from './live-match-info-routing.module';

import { LiveMatchInfoPage } from './live-match-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    LiveMatchInfoPageRoutingModule
  ],
  declarations: [LiveMatchInfoPage]
})
export class LiveMatchInfoPageModule {}
