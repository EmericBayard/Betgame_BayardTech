import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/models/contants.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-stats-edit',
  templateUrl: './modal-stats-edit.component.html',
  styleUrls: ['./modal-stats-edit.component.scss'],
})
export class ModalStatsEditComponent implements OnInit {
  
  P1stats: any;
  P2stats: any;
  user: any;
  userId: any;
  

  constructor(
    private modalCtrl: ModalController,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    // console.log(this.P1stats);
  }

  createObject() {
    let P1Inputs = {
      P1ButsInput: (<HTMLInputElement>document.getElementById('buts-p1')).value,
      P1TirsInput: (<HTMLInputElement>document.getElementById('tirs-p1')).value,
      P1PossessionInput: (<HTMLInputElement>document.getElementById('possession-p1')).value,
      P1SaInput: (<HTMLInputElement>document.getElementById('sa-p1')).value,
      P1PaInput: (<HTMLInputElement>document.getElementById('pa-p1')).value,
      P1PenaltysInput: (<HTMLInputElement>document.getElementById('penaltys-p1')).value,
      P1HorsjeuInput: (<HTMLInputElement>document.getElementById('offsides-p1')).value,
    }
    let P2Inputs = {
      P2ButsInput: (<HTMLInputElement>document.getElementById('buts-p2')).value,
      P2TirsInput: (<HTMLInputElement>document.getElementById('tirs-p2')).value,
      P2PossessionInput: (<HTMLInputElement>document.getElementById('possession-p2')).value,
      P2SaInput: (<HTMLInputElement>document.getElementById('sa-p2')).value,
      P2PaInput: (<HTMLInputElement>document.getElementById('pa-p2')).value,
      P2PenaltysInput: (<HTMLInputElement>document.getElementById('penaltys-p2')).value,
      P2HorsjeuInput: (<HTMLInputElement>document.getElementById('offsides-p2')).value,
    }
    console.log(
      JSON.stringify(P1Inputs),
      JSON.stringify(P2Inputs)
    )

    // TODO : SEND DATA TO API
    //        turnamentId: parseInt(turnamentId, 10),
     //       msg: message,
      //      homeUserIdScore : parseInt(homeUserIdScore, 10),
       //     possession: parseInt(possessionSplit[0], 10),
        //    tirs: parseInt(tirsSplit[0], 10),
         //   chances: parseInt(chancesSplit[0], 10),
          //  horsjeu: parseInt(horsjeuSplit[0], 10),
           // penaltys: parseInt(penaltysSplit[0], 10),
            //precisionTir: parseInt(precisionTirSplit[0], 10),
            //precisionPasse: parseInt(precisionPasseSPlit[0], 10)
            this.httpClient.get<any>('https://preprodparten.fr/api/auth/user', {
              headers: new HttpHeaders({
                authorization: window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ')
              })
            }).subscribe(
              async fullResponse => {
                this.user = fullResponse.name;
                this.userId = fullResponse.id;
                console.log("USER : "+fullResponse.id)
                this.httpClient.post<any>("https://preprodparten.fr/api/update-match?tournament_id="+this.P1stats.turnamentId+"&home_user_id_score="+this.P1stats.home_user_id_score+"&away_user_id_score="+this.P2stats.home_user_id_score+"&possession="+this.P1stats.possession+":"+this.P2stats.possession+"&tirs="+this.P1stats.tirs+":"+this.P2stats.tirs+"&chances="+"23"+":"+"31"+"&hors_jeu="+this.P1stats.hors_jeu+":"+this.P2stats.hors_jeu+"&penaltys="+this.P1stats.penaltys+":"+this.P2stats.penaltys+"&precision_des_tirs="+this.P1stats.precision_des_tirs+":"+this.P2stats.precision_des_tirs+"&precision_des_passes="+this.P1stats.precision_des_passes+":"+this.P2stats.precision_des_passes+"&user_id="+this.userId, {
      headers: new HttpHeaders({
        authorization: window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ')
      })
    }).subscribe(
      async fullResponse => {
        console.log("ok for modif")
        console.log(fullResponse);


      })
              }, async (err) => {
                console.log(err);
              }
        );
    

    this.dismiss()
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}

