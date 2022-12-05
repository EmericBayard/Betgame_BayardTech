import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetGameInvitationPage } from './bet-game-invitation.page';

const routes: Routes = [
  {
    path: 'invite',
    component: BetGameInvitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetGameInvitationPageRoutingModule {}
