import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TeamPreviewPageRoutingModule } from './team-preview-routing.module';

import { TeamPreviewPage } from './team-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    TeamPreviewPageRoutingModule
  ],
  declarations: [TeamPreviewPage]
})
export class TeamPreviewPageModule {}
