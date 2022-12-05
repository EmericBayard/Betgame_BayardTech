import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BetGameInvitationPageRoutingModule } from './bet-game-invitation.page-routing.module';

import { BetGameInvitationPage } from './bet-game-invitation.page';
import {TermsComponent} from "./components/terms.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BetGameInvitationPageRoutingModule
  ],
  declarations: [BetGameInvitationPage,TermsComponent]
})
export class BetGameInvitationPageModule {}
