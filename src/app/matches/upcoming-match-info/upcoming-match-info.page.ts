import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReminderPage } from '../../other/reminder/reminder.page';
import { SubscribeTournamentComponent } from '../../tournaments/subscribe-tournament/subscribe-tournament.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament, TournamentsResponse, TournamentStatus } from 'src/models/api/tournament';
import { Constants } from 'src/models/contants.models';
import { AuthResponse } from 'src/models/api/auth_response';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-upcoming-match-info',
  templateUrl: './upcoming-match-info.page.html',
  styleUrls: ['./upcoming-match-info.page.scss'],
})
export class UpcomingMatchInfoPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

 segment = 0;

 isSubscribedVar: any = {};

 data = {
  turnament: {}
 };

 turnament: any = {
 };

 turnamentId= 0;

 winner = "";

isSub = new BehaviorSubject({});
isS = "S'inscrire";
user: any = {};
userId = -1;
  constructor(private modalController: ModalController, private route: Router, private httpClient: HttpClient) { }

    ngOnInit() {
      this.isS = "Chargement...";
      this.turnament = history.state.turnament;
      console.log(this.turnament);
      this.httpClient.get<any>('https://preprodparten.fr/api/auth/user', {
      headers: new HttpHeaders({
        authorization: window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ')
      })
    }).subscribe(
      async fullResponse => {
        this.user = fullResponse.name;
        this.userId = fullResponse.id;
        this.isSubscribed();
      }, async (err) => {
        console.log(err);
      }
    );
    const token = window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    this.httpClient.get<any>('https://preprodparten.fr/api/auth/tournaments', httpOptions)
    .subscribe(async (authResponse:any) => {
      // const res = authResponse.completed_tournaments.find(element => element.id == this.turnamentId);
      const res = authResponse.completed_tournaments.find(element => element.id == this.turnament.id).winner
      this.winner = res;
      this.httpClient.get<any>('https://preprodparten.fr/api/auth/user-details?user_id='+this.winner, httpOptions)
    .subscribe( (authResponse:any) => {
      this.winner = authResponse.name;
  })
    }, async err => {
      console.log(err)
    })
  };


    async segmentChanged() {
      await this.slider.slideTo(this.segment);
    }

    isSubscribed() {
      if(this.turnament.users_joined >= this.turnament.slots) {
        console.log("Tournoi plein")
        this.isS = 'Tournoi plein';
      }
      if(this.turnament.users_joined.includes(this.user)) {
        console.log("Inscrit ! Voir les matchs")
        this.isS = 'Inscrit ! Voir les matchs';
      } else if(this.turnament.users_joined.length < parseInt(this.turnament.slots)) {
        console.log("S'inscrire")
        this.isS = "S'inscrire";
      } else {
        console.log("Inscription impossible")
        this.isS = 'Inscription impossible';
      }
    }




  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  wallet(){
     this.route.navigate(['./wallet']);
   }

 reminder() {
    this.modalController.create({ component: ReminderPage }).then((modalElement) => modalElement.present());
  }

  async modalFunction() {
    if(this.isS === 'Tournoi plein') {
    }
    if(this.isS === 'Inscrit ! Voir les matchs') {
      this.route.navigate(['./tournament-matches'],{queryParams: {tournament_id: this.turnament.id, round: this.turnament.round, user_id: this.userId}});
    } else if(this.isS === "S'inscrire") {
      this.presentModal();
    } else {
      this.isS = 'Inscription impossible';
    }
  }


  async presentModal() {
    const token = window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };

    this.httpClient.post<AuthResponse>(Constants.BASE_URL + `auth/participate?tournament_id=`+this.turnament.id+'&user_id='+this.userId.toString(),{}, httpOptions)
      .subscribe(async (authResponse:any) => {
        this.isSub.next(authResponse);
        //this.isSubscribed();
        this.isS = JSON.stringify(authResponse);
        const modal = await this.modalController.create({
          component: SubscribeTournamentComponent,
          cssClass: '',
          componentProps: {
            title:  this.isS
          }
        });
        this.isSubscribed();
        return await modal.present();
      }, async (err) => {
        this.isS = 'Inscription échouée';
      });
  }
  
}
