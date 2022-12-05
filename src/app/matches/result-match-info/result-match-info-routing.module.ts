import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultMatchInfoPage } from './result-match-info.page';

const routes: Routes = [
  {
    path: '',
    component: ResultMatchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultMatchInfoPageRoutingModule {}
