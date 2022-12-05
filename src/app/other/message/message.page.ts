import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  savePlayer1 = false;
  savePlayer2 = true;
   segment = 0;
   @ViewChild('slides', { static: true }) slider: IonSlides;
   constructor(private route: Router,   private modalController: ModalController) { }

   ngOnInit() {
   }
   addPlayer1() {
      this.savePlayer1 = !this.savePlayer1;
   }


   async segmentChanged() {
      await this.slider.slideTo(this.segment);
   }

   async slideChanged() {
      this.segment = await this.slider.getActiveIndex();
   }
   team_preview() {
      this.route.navigate(['./team-preview']);
   }  
   
  /* player_info() {
    this.modalController.create({ component: PlayerInfoPage }).then((modalElement) => modalElement.present());
  }  */

  /*async searchModal() {
    const modal = await this.modalController.create({
      component:  SearchPlayerComponent,
      cssClass: '',
      componentProps: {
         'pseudo': 'Douglas',
         }
      });
   return await modal.present();
  }*/
}
