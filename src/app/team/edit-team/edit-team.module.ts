import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { EditTeamPageRoutingModule } from './edit-team-routing.module';

import { EditTeamPage } from './edit-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    EditTeamPageRoutingModule
  ],
  declarations: [EditTeamPage]
})
export class EditTeamPageModule {}
