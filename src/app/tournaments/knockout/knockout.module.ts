import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnockoutRoutingModule } from './knockout-routing.module';

import { KnockoutPage } from './knockout.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
      KnockoutRoutingModule,
        HomePageModule
    ],
  declarations: [KnockoutPage]
})

export class KnockOutPageModule {}
