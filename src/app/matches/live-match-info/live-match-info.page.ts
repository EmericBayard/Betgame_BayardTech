import { Component, OnInit, ViewChild } from '@angular/core';
import {AlertController, IonSlides, ModalController, NavController, Platform} from '@ionic/angular';
import {Router} from "@angular/router";
import {Camera} from "@ionic-native/camera/ngx";
import {WebView} from "@ionic-native/ionic-webview/ngx";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-live-match-info',
  templateUrl: './live-match-info.page.html',
  styleUrls: ['./live-match-info.page.scss'],
})
export class LiveMatchInfoPage implements OnInit {
 segment = 0;
 @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private router: Router) { }


  ngOnInit() {
  }

  // constructor(public platform:Platform,private router: Router,private camera: Camera, private webview: WebView, private alertCtrl: AlertController, private httpClient: HttpClient, private modalCtrl: ModalController, private navCtrl: NavController,) {
  //   this.InitiatePlatformIfReady();
  // }

  showMatchInfo(){
    this.router.navigateByUrl("/player-info").then()
  }

 

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
