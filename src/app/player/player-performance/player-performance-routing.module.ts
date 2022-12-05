import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerPerformancePage } from './player-performance.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerPerformancePageRoutingModule {}
