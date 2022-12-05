import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCaptainPageRoutingModule } from './choose-captain-routing.module';

import { ChooseCaptainPage } from './choose-captain.page';

import { TranslateModule } from '@ngx-translate/core';
   

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ChooseCaptainPageRoutingModule
  ],
  declarations: [ChooseCaptainPage]
})
export class ChooseCaptainPageModule {}
