import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentRoundPageRoutingModule } from './tournament-round-routing.module';

import { TournamentRoundPage } from './tournament-round.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentRoundPageRoutingModule
  ],
  declarations: [TournamentRoundPage]
})
export class TournamentRoundPageModule {}
