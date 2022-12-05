import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TournamentComponent } from '../../tournaments/tournament/tournament.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament, TournamentsResponse, TournamentStatus } from 'src/models/api/tournament';
import { Constants } from 'src/models/contants.models';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.page.html',
  styleUrls: ['./my-matches.page.scss'],
})
export class MyMatchesPage implements OnInit {
  segment = 0;
  tournaments: Tournament[] = [];

  @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private modalController: ModalController, private route: Router, private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get<any>('https://preprodparten.fr/api/auth/torn', {
      headers: new HttpHeaders({
        Authorization: window.localStorage.getItem(Constants.LS_TOKEN_KEY)
      })
    } ).subscribe(
      async fullResponse => {
        this.tournaments = fullResponse.data;
        console.log(this.tournaments);
      }, async (err) => {
      }
    );
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  getTournaments(status: TournamentStatus) {
    return this.tournaments.filter((t) => {
      switch (status) {
        case TournamentStatus.UPCOMING:
          if (new Date(t.start_date).getTime() > new Date().getTime() || t.slots === t.users_joined.length) {
            return t;
          }
          break;
        case TournamentStatus.INPROGRESS:
          if (new Date(t.start_date).getTime() < new Date().getTime() && new Date(t.end_date).getTime() > new Date().getTime()) {
            return t;
          }
          break;
        case TournamentStatus.FINISH:
          if (new Date(t.end_date).getTime() < new Date().getTime()) {
            return t;
          }
          break;
      }
    });
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  upcoming_match_info() {
    this.route.navigate(['./upcoming-match-info']);
  }
  live_match_info() {
    this.route.navigate(['./live-match-info']);
  }
  completed_match_info() {
    this.route.navigate(['./completed-match-info']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TournamentComponent,
      cssClass: ''
    });
    return await modal.present();
  }

}
