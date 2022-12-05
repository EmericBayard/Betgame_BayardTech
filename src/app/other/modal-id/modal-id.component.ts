import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-id',
  templateUrl: './modal-id.component.html',
  styleUrls: ['./modal-id.component.scss']
})
export class ModalIdComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
