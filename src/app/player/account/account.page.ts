import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app.config';
import { BuyappalertPage } from '../../statics/buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/models/contants.models';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  userTokens: any;
  username: any;

  constructor(
    private route: Router,
    private modalController: ModalController,
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) public config: AppConfig,
  ) { }

  ngOnInit() {
    this.retrieveData();
  }

  my_team() {
    this.route.navigate(['./my-team']);
  }
  stats() {
    this.route.navigate(['./my-stat'])
  }
  my_profile() {
    this.route.navigate(['./my-profile']);
  }
  my_points() {
    this.route.navigate(['./my-points']);
  }
  leaderboard() {
    this.route.navigate(['./leaderboard']);
  }
  about_us() {
    this.route.navigate(['./about-us']);
  }
  support() {
    this.route.navigate(['./support']);
  }
  privacy_policy() {
    this.route.navigate(['./privacy-policy']);
  }
  language() {
    this.route.navigate(['./language']);
  }
  faqs() {
    this.route.navigate(['./faqs']);
  }

  // AUTH USER AND GET HIS ID AND USERNAME
  retrieveData() {
    this.httpClient.get<any>('https://preprodparten.fr/api/auth/user', {
      headers: new HttpHeaders({
        authorization: window.localStorage.getItem(Constants.LS_TOKEN_KEY).replace(':',' ')
      })
    }).subscribe(
      async response => {
        console.log(response);
        this.username = response.name;
        this.userTokens = response.nr_tokens;
      },
      async (err) => {
        console.log(err);
      }
    );
  }

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }
  developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }
}
