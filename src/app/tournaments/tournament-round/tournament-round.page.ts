import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/models/contants.models';
import {Location} from '@angular/common';
import { AlertController,  ModalController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ModalStatsComponent} from '../../other/modal-stats/modal-stats.component';
import { ModalIdComponent } from './../../other/modal-id/modal-id.component';


@Component({
  selector: 'app-tournament-round',
  templateUrl: './tournament-round.page.html',
  styleUrls: ['./tournament-round.page.scss'],
})

export class TournamentRoundPage implements OnInit {
  modalController: any;

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private _location: Location,
              private camera: Camera,
              private webview: WebView,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) { }

  name = [];
  match = [];
  myMatch = [];
  turnamentId = -1;
  roundId = -1;
  userId = "-1";
  msg = "Chargement";
  nr_tokens = "0";
  namePlayer = [];

  ngOnInit() {
    this.activatedRoute
    .queryParams
    .subscribe(params => {
        this.turnamentId = params["tournament_id"];
        this.roundId = params["round_id"];
        this.userId = params["user_id"];
        this.httpClient.get<any>('https://preprodparten.fr/api/auth/tournament-matches?torunament_id='+params["tournament_id"]+'&round='+params["round"], {
      headers: new HttpHeaders({
        authorization: window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ')
      })
        }).subscribe(
      async fullResponse => {

        this.match = fullResponse["tournament-matches"];
        console.log('MATCH :')
        console.log(this.match)
        console.log('NAME :')
        console.log(this.name)
        if (this.match.length <= 0) {
          this.msg = "Les matchs sont en cours de préparation, merci de votre patience !"
        }
        else {
          this.msg = "";
        }
        this.match.forEach(m => {
          if(m.away_user_id == this.userId || m.home_user_id == this.userId) {
            this.myMatch.push(m);
          }
        });
        this.match.forEach(async m => {
          await (await this.getName(m.away_user_id)).subscribe(
            async fullResponse => {
              console.log(fullResponse.name)
              m.away_user_id = fullResponse.name;
            }
          )
      });
      this.match.forEach(async m => {
        await (await this.getName(m.home_user_id)).subscribe(
          async fullResponse => {
            console.log(fullResponse.name)
            m.home_user_id = fullResponse.name;
          }
        )
      })
      }, async (err) => {
        console.log(err);
      }
        );
        });
        this.httpClient.get<any>('https://preprodparten.fr/api/auth/torn').subscribe(
          async fullResponse => {
            const t = fullResponse.data.find(turnament => turnament.id ==  this.turnamentId);
            this.nr_tokens = t.nr_tokens;

          }
        );

  }

  backClicked() {
    this._location.back();
  }

  endpoint = 'https://preprodparten.fr/api/annotate';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODZjYzI4YmMzNDg4OTc2MThiYjkwOTk2Y2Q3ZjlmZTMxYTcyMjU5ZmU5YzU3YTc0ZjNiNGU4MTFlYjQ2ZTdiMzgzMDVhYTQ4NjU3MGRmMTIiLCJpYXQiOjE2NDMyMzIzMDQsIm5iZiI6MTY0MzIzMjMwNCwiZXhwIjoxNjc0NzY4MzA0LCJzdWIiOiIyNCIsInNjb3BlcyI6W119.nuReJY-VGmxsyAm2hlh1JDGoF5ERhWYtYI7jKN-S7zgjgPY82ONmVQyRERMNhyDVXeAOAmrrCz53aOmodgx7UOzi-zAWRXP67gb6crYYbebhzOdztHwU2XzEsMte03lub2XTlgFdkSu78WSHEuoDDruTCPCZoX1k2kBm56iup1QUHDD0IIxk61pJR_YLemX_Jj637gw6MjU6e8AVj7OKDOSBPR4XPfDNAUiqdKz1nkAyWWXjqp_gXbYwQhqOqkWaWHaa7AHgdCcxyXDP95I5d8RKmnnMoTly5bDOxbesrjfTtjkSlidVP_eXgRSBwPIhemk11L4Olm3aDwCKs2tK-v1xEBQXwPVQdwRZ0zPWPeQAcyJIqQJie-ZCagcDNO1tzyi6dWw0R_0BJftwH_ZkuishqiirGBi6El7Fw2Og7YUH0TOwZiGDHheIxZpFGK3s7YBU0AqWTjqad9IdaiKV5KAXHtllkkhX1q1Ioqd-CUhDrhMFxoa63gtLWPEBo17rNnieqKzccZx4GFpuLpOhkJcec00YXZQyZo6-dtA_QoaCaXOmM1PoujFhERyEu9i-WgPT5llDLhNXVTOCpwx0VagynA3Z-45WDWnGk6vBYs-wh1CKyzHCiPqM0qjWLmlKLYPWiMArLhtCxo47uP-83OheSU7-ThedfImL3Gd64d4'
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
  async openModal(joueur1:any, joueur2:any): Promise<void>{
    const modal = await this.modalCtrl.create({
      component: ModalStatsComponent,
      componentProps: {
        P1stats: joueur1,
        P2stats: joueur2
      }

    })
    return await modal.present();

  }

  async openModalId(props): Promise<void>{
    let matchData = this.match;
    const modal = await this.modalCtrl.create({
      component: ModalIdComponent,
      componentProps: {
        tournament: matchData[0]['tournament_id'],
        home: matchData[0]['home_user_id'],
        away: matchData[0]['away_user_id'],
      }
    }
    );
    console.log(matchData[0]);
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
      header: "Démarrez l’Eye Catcher",
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
