import {Component, ViewChild, ElementRef} from '@angular/core';
import {Filesystem, Directory} from '@capacitor/filesystem';
import {Storage} from '@capacitor/storage';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {AlertController, NavController, Platform} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AlertPromise} from 'selenium-webdriver';
import {Chart} from 'chart.js';
import {ModalStatsComponent} from '../../other/modal-stats/modal-stats.component';
import {Constants} from "../../../models/contants.models";
import {Router} from "@angular/router";
import {element} from "protractor";


@Component({
  selector: 'custom-tabs',
  templateUrl: 'custom-tabs.page.html',
  styleUrls: ['custom-tabs.page.scss']
})
export class CustomTabsPage {

  public bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
  @ViewChild('menu') menuView: ElementRef;
  current = 1;


  goToUrl(index) {
    switch (index) {
      case 1:
        this.router.navigateByUrl("tabs/home").then();break
      case 2:
        this.navCtrl.navigateRoot(['/tabs/myTournaments']).then();break
      case 3:
        this.addNewToGallery().then();break
      case 4:
        this.navCtrl.navigateRoot(['/tabs/messages']).then();break
      case 5:
        this.navCtrl.navigateRoot(['/tabs/account']).then();break
    }
  }


  constructor(public platform:Platform,private router: Router, private webview: WebView, private alertCtrl: AlertController, private httpClient: HttpClient, private modalCtrl: ModalController, private navCtrl: NavController,private camera: Camera,) {
    this.InitiatePlatformIfReady();
  }




   clickItems(event,index) {
     let target = event.target || event.srcElement || event.currentTarget;
     let body = document.body;
     this.current = index;
       let active  = document.querySelector('.active')[0];
    const menu = body.querySelector(".menu");
    const menuBorder = menu.querySelector(".menu__border");
    let activeItem = menu.querySelector(".active");
    menu.removeAttribute('--timeOut');
    if (activeItem == target) return;
    activeItem = target;
    this.offsetMenuBorder(activeItem, menuBorder,menu);
    this.goToUrl(index);
  }

   offsetMenuBorder(element, menuBorder,menu) {

    const offsetActiveItem = element.getBoundingClientRect();
     // menu.style.setProperty("--timeOut", "none");
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

  }

  InitiatePlatformIfReady() {
    this.platform.ready().then(() => {
      const menu = document.querySelector(".menu");
      const menuBorder = document.querySelector(".menu__border");
      let activeItem = document.querySelector(".active");
      this.offsetMenuBorder(activeItem, menuBorder,menu);
      menu.setAttribute("style","{'--timeOut': 'none'}");
      this.platform.resize.subscribe(() => {

      });
    });
  }

  endpoint = 'https://preprodparten.fr/api/annotate';

  httpOptions = {
    headers: new HttpHeaders({

      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDgyZjg2ZDZlMTQxYjg2MzQzMWFiYjkyOWU0NDIxZGQwMDUzNWI5NGVmZDY4ZmNiYzU1MzNlMjYyNGQ0MDcxYWU2YjY0ZTEyNjI4OWZjMDIiLCJpYXQiOjE2NjYzMDM1NDEsIm5iZiI6MTY2NjMwMzU0MSwiZXhwIjoxNjk3ODM5NTQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BpRRq1zYmGKbvYu1458fie1SJ-3xrIqWslb1E9iK74ZWZuJiVI1AU0qvkC77-jKO8jq7MmHaBjeuXDbfzey8BjS-Qu0b8mVfRe4DEdNRoZjPOZ6BCA-hVZKbySyajClSljlNjsCewNVM_9IWNCsQcWQ73TuPkoDzEVKWW6ex7-iQ4hotYl0idcVIlivF9Yq6aankupD0F0bdK4TQU_OZu23MfRo6tubfAQn2EG5sTktUL-soccV3V8lKrchuBzftwhyJ6EVyo9YEQuMPXOiP9pV-PaYjXo8hZb8yIxdNtepwn8faUIKZvU7Fsv5j7avPgbMJWKeT69it8yaM7BscC5bjgvSClc3-Anuw7prC6nOnNgtG1Y7LGSkW-cF4mev1iS0VWx5UN3eP5PMMJXcfuM8RGYtF_6qdE2CrdG5VVLG_NUn7eLKbO9xmjkdjxc_US_NwpWqiJwNirBvovWs-KhkkoNpHooagsFvNjrlO8Epmj52d8coNbU0vptNK0ZF76K33TCFRq30pJg0u70EN892yZltWYxxJhLyMfVVzQBweOrXBW2hZLXKrZ3xgh63uW9WkXR6XKxwMHk_-zAqvktG-RrjUfz8uXYDumZI0oslQpx2JRKum-2BolLakDl3gpdv5RSl3JmjWrJWMV9xTyyxlfZBqTXuQytuIIUq4RcU'
    })
  };

  dataOcr = "";
  joueura:any;
  jouerb:any;


  async sendBlob(data: any): Promise<void> {
    console.log("send blob");
    this.httpClient.post<Blob>(this.endpoint, data, this.httpOptions).subscribe(
      async fullResponse => {
        console.log(fullResponse)
        this.dataOcr = JSON.stringify(fullResponse);
        let dataOcrObjet = JSON.parse(JSON.stringify(fullResponse));
        let result = {
          message : dataOcrObjet.message,
          tournament_id: dataOcrObjet.data.tournament_id,
          score_home: dataOcrObjet.data.home_user_id_score,
          score_away: dataOcrObjet.data.away_user_id_score,
          possession: dataOcrObjet.data.possession,//ok
          tirs: dataOcrObjet.data.tirs,
          chances:  dataOcrObjet.data.chances,//ok
          hors_jeu: dataOcrObjet.data.hors_jeu,
          penaltys: dataOcrObjet.data.penaltys,//ok
          precision_des_tirs: dataOcrObjet.data.precision_des_tirs,//ok
          precision_des_passes: dataOcrObjet.data.precision_des_passes,//ok

        }
        if(
          result.score_home == undefined
          && result.score_away == undefined
        ){
          let alertRes = await this.alertCtrl.create({
            header: 'Qualité de photo',
            cssClass:'alertRes',
            message: "<div class='alertResP'>"+"Veuillez reprendre la photo, l'image est de mauvaise qualité"+"</div>"
          });
          await alertRes.present();
        } else {
          let message = result.message;
          let turnamentId = result.tournament_id;
          let homeUserIdScore = result.score_home;
          let awayUserIdScore = result.score_away
          let possession = result.possession;
          let possessionSplit = possession.split(':');
          let tirs = result.tirs;
          let tirsSplit = tirs.split(':');
          let chances = result.tirs;
          let chancesSplit = chances.split(':');
          let horsjeu = result.hors_jeu
          let horsjeuSplit = horsjeu.split(':');
          let penaltys  = result.penaltys;
          let penaltysSplit = penaltys.split(':');
          let precisionTir = result.precision_des_tirs;
          let precisionTirSplit = precisionTir.split(':');
          let precisionPasse = result.precision_des_passes;
          let precisionPasseSPlit = precisionPasse.split(':');



          const joueur1 = {
            turnamentId: 0,
            msg: message,
            homeUserIdScore : parseInt(homeUserIdScore, 10),
            possession: parseInt(possessionSplit[0], 10),
            tirs: parseInt(tirsSplit[0], 10),
            chances: parseInt(chancesSplit[0], 10),
            horsjeu: parseInt(horsjeuSplit[0], 10),
            penaltys: parseInt(penaltysSplit[0], 10),
            precisionTir: parseInt(precisionTirSplit[0], 10),
            precisionPasse: parseInt(precisionPasseSPlit[0], 10)

          }
          const joueur2 = {
            turnamentId: parseInt(turnamentId, 10),
            homeUserIdScore : parseInt(awayUserIdScore, 10),
            possession: parseInt(possessionSplit[1], 10),
            tirs: parseInt(tirsSplit[1], 10),
            chances: parseInt(chancesSplit[1], 10),
            horsjeu: parseInt(horsjeuSplit[1], 10),
            penaltys: parseInt(penaltysSplit[1], 10),
            precisionTir: parseInt(precisionTirSplit[1], 10),
            precisionPasse: parseInt(precisionPasseSPlit[1], 10)
          }

          console.log(joueur2)
          this.openModal(joueur1,joueur2);
          }
      }
    )
  }


  async getName(n) {
    return this.httpClient.get<any>('https://preprodparten.fr/api/auth/user-details?user_id='+n, this.httpOptions)

  }
  async openModal(joueur1: any, joueur2: any): Promise<void>{
    const modal = await this.modalCtrl.create({
      component: ModalStatsComponent,
      componentProps: {
        joueur1: joueur1,
        joueur2: joueur2
      }
    })
    return await modal.present();
  }

  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    quality: 100,
    allowEdit:true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }

  photo:any;

  async addNewToGallery() {
    let alertBox = await this.alertCtrl.create({
      header: "Découvrez l’Eye Catcher !",
      message: "La nouvelle méthode pour mettre à jours vos statistiques à l'aide de votre appareil photo",
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then(res=>{
              this.photo = res;
              // traitement
              const rawPhoto = atob(this.photo);
              const bytes = new Array(rawPhoto.length);
              for(let i = 0; i < rawPhoto.length; i++) {
                bytes[i] = rawPhoto.charCodeAt(i);
              }
              const arr = new Uint8Array(bytes);
              const blob = new Blob([arr], {type: 'image/jpg'});

              const formData = new FormData();
              formData.append("user_id", "1");
              formData.append("tournament_id", "1");
              formData.append("image", blob, "screen.jpg");
              formData.getAll("image")
              // formData.getAll("score_away")
              // formData.getAll("score_home")
              this.sendBlob(formData);


            })
          }
        },
        {
          text: 'Galleries',
          handler: () => {
             this.camera.getPicture(this.galleryOptions).then(res=>{
               this.photo = res;
               // traitement
              const rawPhoto = atob(this.photo);
              const bytes = new Array(rawPhoto.length);
              for(let i = 0; i < rawPhoto.length; i++) {
                bytes[i] = rawPhoto.charCodeAt(i);
              }
              const arr = new Uint8Array(bytes);
              const blob = new Blob([arr], {type: 'image/jpg'});

              const formData = new FormData();
              formData.append("user_id", "0");
              formData.append("tournament_id", "0");
              formData.append("image", blob, "screen.jpg");
              formData.getAll("image")
              // formData.getAll("score_away")
              // formData.getAll("score_home")
              this.sendBlob(formData);
             })
          }
        },
      ]
    })


    await alertBox.present();



  }

}
