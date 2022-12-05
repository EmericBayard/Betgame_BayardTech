import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingMatchInfoPage } from './upcoming-match-info.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingMatchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingMatchInfoPageRoutingModule {}
