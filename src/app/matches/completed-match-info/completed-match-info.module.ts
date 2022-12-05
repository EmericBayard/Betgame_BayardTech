import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
   
import { CompletedMatchInfoPageRoutingModule } from './completed-match-info-routing.module';

import { CompletedMatchInfoPage } from './completed-match-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CompletedMatchInfoPageRoutingModule
  ],
  declarations: [CompletedMatchInfoPage]
})
export class CompletedMatchInfoPageModule {}
