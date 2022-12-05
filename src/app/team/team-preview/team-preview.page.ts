import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-team-preview',
  templateUrl: './team-preview.page.html',
  styleUrls: ['./team-preview.page.scss'],
})
export class TeamPreviewPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

back() {
   this.navCtrl.pop();
  }     
}
