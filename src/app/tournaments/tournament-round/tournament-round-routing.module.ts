import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentRoundPage } from './tournament-round.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentRoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoundPageRoutingModule {}
