import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { MyMatchesPageRoutingModule } from './my-matches-routing.module';

import { MyMatchesPage } from './my-matches.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        MyMatchesPageRoutingModule,
        HomePageModule
    ],
  declarations: [MyMatchesPage]
})
export class MyMatchesPageModule {}
