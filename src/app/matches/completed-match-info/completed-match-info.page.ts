import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PlayerPerformancePage } from '../../player/player-performance/player-performance.page';
@Component({
  selector: 'app-completed-match-info',
  templateUrl: './completed-match-info.page.html',
  styleUrls: ['./completed-match-info.page.scss'],
})
export class CompletedMatchInfoPage implements OnInit {
 segment = 0;
 @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {

  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
   player_performance() {
    this.modalController.create({ component: PlayerPerformancePage }).then((modalElement) => modalElement.present());
  }
}
