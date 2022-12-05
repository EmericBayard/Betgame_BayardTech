import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomTabsRoutingModule } from './custom-tabs-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { CustomTabsPage } from './custom-tabs.page';
import { ModalStatsComponent } from '../modal-stats/modal-stats.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    CustomTabsRoutingModule
  ],
  declarations: [

    ModalStatsComponent
  ]
})
export class TabsPageModule {}
