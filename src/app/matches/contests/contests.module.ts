import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { ContestsPageRoutingModule } from './contests-routing.module';

import { ContestsPage } from './contests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ContestsPageRoutingModule
  ],
  declarations: [ContestsPage]
})
export class ContestsPageModule {}
