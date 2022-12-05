import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonItem } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { MyProfilePage } from './my-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,        
    MyProfilePageRoutingModule
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {

  

}