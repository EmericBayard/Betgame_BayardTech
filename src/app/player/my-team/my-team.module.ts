import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { MyTeamPageRoutingModule } from './my-team-routing.module';

import { MyTeamPage } from './my-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    MyTeamPageRoutingModule
  ],
  declarations: [MyTeamPage]
})
export class MyTeamPageModule {}
