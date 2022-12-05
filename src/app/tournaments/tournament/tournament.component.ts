import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  tour = ['16eme', '8eme', 'Quart', 'Demi', 'Final']
  cursor = 0;
  res = this.tour[0];
  displayTourForward() {
    this.cursor = (this.cursor + 1);
    this.res = this.tour[Math.abs(this.cursor)%(this.tour.length)]
  }

  n = 0;
  displayTourBackward() {
    this.cursor = (this.cursor - 1);
    this.res = this.tour[Math.abs(this.cursor)%(this.tour.length)]
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
