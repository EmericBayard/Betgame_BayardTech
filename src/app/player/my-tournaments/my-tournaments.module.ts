import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { MyTournamentsPageRoutingModule } from './my-tournaments-routing.module';

import { MyTournamentsPage } from './my-tournaments.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        MyTournamentsPageRoutingModule,
        HomePageModule
    ],
  declarations: [MyTournamentsPage]
})
export class MyTournamentsPageModule {}
