import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

dismiss() {
    this.modalController.dismiss();
  }   
}
