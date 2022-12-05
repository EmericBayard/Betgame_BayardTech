import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTurnamentInfoPage } from './upcoming-match-info.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTurnamentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTurnamentInfoPageRoutingModule {}
