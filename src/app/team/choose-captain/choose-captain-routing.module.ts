import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCaptainPage } from './choose-captain.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCaptainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCaptainPageRoutingModule {}
