import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { MyPointsPageRoutingModule } from './my-points-routing.module';

import { MyPointsPage } from './my-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    MyPointsPageRoutingModule
  ],
  declarations: [MyPointsPage]
})
export class MyPointsPageModule {}
