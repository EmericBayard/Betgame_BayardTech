import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe-tournament',
  templateUrl: './subscribe-tournament.component.html',
  styleUrls: ['./subscribe-tournament.component.scss'],
})
export class SubscribeTournamentComponent implements OnInit {

  title;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    //console.log(this.title)
  }

  dismiss() {
    this.modalController.dismiss();
  } 
}
