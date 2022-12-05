import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-player-performance',
  templateUrl: './player-performance.page.html',
  styleUrls: ['./player-performance.page.scss'],
})
export class PlayerPerformancePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 dismiss() {
    this.modalController.dismiss();
  }  
}
