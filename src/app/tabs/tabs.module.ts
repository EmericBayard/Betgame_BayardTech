import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { TabsPage } from './tabs.page';
import { ModalStatsComponent } from '../other/modal-stats/modal-stats.component';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TranslateModule,
        TabsPageRoutingModule,
        HomePageModule
    ],
  declarations: [
    TabsPage,
    ModalStatsComponent
  ]
})
export class TabsPageModule {}
