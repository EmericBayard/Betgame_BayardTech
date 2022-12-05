import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
 
import { UpcomingMatchInfoPageRoutingModule } from './upcoming-match-info-routing.module';

import { UpcomingMatchInfoPage } from './upcoming-match-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    UpcomingMatchInfoPageRoutingModule
  ],
  declarations: [UpcomingMatchInfoPage]
})
export class UpcomingMatchInfoPageModule {}
