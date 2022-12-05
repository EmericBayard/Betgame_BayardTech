import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedMatchInfoPage } from './completed-match-info.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedMatchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedMatchInfoPageRoutingModule {}
