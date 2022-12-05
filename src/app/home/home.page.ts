import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
//import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalController: ModalController, private route: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

   async showLoading() {
      const loading = await this.loadingCtrl.create({
        message: '<img src="../../assets/images/loader.svg" alt="loader">',
        duration: 300000,
        backdropDismiss : true,
        keyboardClose: true,
        cssClass: 'custom-loading',

        animated: true,
        showBackdrop:true,
        spinner: null

      });
      loading.present();

    }

    

 contests(){
     this.route.navigate(['./contests']);
   }
   betGameInvite(){
     this.route.navigate(['./tournament/invite']);
   }

  liveMatchInfo() {
    this.route.navigate(['./live-match-info']);
  }

   UpcomingMatchInfo() {
      this.route.navigate(['./upcoming-match-info']);
    }
    knockout(){
      this.route.navigate(['./knockout']);
    }
  async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
}
}
