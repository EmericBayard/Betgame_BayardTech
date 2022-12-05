import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReminderPage } from '../reminder/reminder.page'; 
@Component({
  selector: 'app-upcoming-match-info',
  templateUrl: './upcoming-match-info.page.html',
  styleUrls: ['./upcoming-match-info.page.scss'],
})
export class UpcomingMatchInfoPage implements OnInit {
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
    
 wallet(){ 
     this.route.navigate(['./wallet']);   
   } 
 reminder() {
    this.modalController.create({ component: ReminderPage }).then((modalElement) => modalElement.present());
  }     
}
