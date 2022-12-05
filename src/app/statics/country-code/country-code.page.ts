import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-country-code',
  templateUrl: './country-code.page.html',
  styleUrls: ['./country-code.page.scss'],
})
export class CountryCodePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 dismiss() {
    this.modalController.dismiss();
  }  
}
