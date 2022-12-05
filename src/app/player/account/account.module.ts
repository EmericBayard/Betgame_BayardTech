import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        AccountPageRoutingModule,
        HomePageModule
    ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
