import { Component ,ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import {ModalController} from "@ionic/angular";
// import { IonModal } from '@ionic/angular';

@Component({
  selector: 'modal-terms',
  templateUrl: '../components/terms.page.html',
  styleUrls: ['../register.page.scss'],
})

export class TermsComponent  {
  name: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
