import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReminderPage } from '../../other/reminder/reminder.page';
@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {
 segment = 0;
 @ViewChild('slides', { static: true }) slider: IonSlides;

  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }


 create_new_team(){
     this.route.navigate(['./create-new-team']);
   }
 edit_team(){
     this.route.navigate(['./edit-team']);
   }
 wallet(){
     this.route.navigate(['./wallet']);
   }
 reminder() {
    this.modalController.create({ component: ReminderPage }).then((modalElement) => modalElement.present());
  }
}
