import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ResultMatchInfoPageRoutingModule } from './result-match-info-routing.module';

import { ResultMatchInfoPage } from './result-match-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultMatchInfoPageRoutingModule,
    TranslateModule
  ],
  declarations: [ResultMatchInfoPage]
})
export class ResultMatchInfoPageModule {}
