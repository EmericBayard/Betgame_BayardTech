import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveMatchInfoPage } from './live-match-info.page';

const routes: Routes = [
  {
    path: '',
    component: LiveMatchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveMatchInfoPageRoutingModule {}
