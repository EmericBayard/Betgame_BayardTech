import { AuthResponse } from '../../../models/api/auth_response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryCodePage } from '../../statics/country-code/country-code.page';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Constants } from 'src/models/contants.models';
let anime: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {


  login: string = 'betgame@gmail.com';
  password: string = 'betgame12';
  constructor(private route: Router,
    private navCtrl: NavController,
    private modalController: ModalController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController) { }

  ngOnInit() {

  }



  async signin() {
    let alertWait = await this.alertCtrl.create({
      header: "Connexion en cours...",
    });
    await alertWait.present();

    this.httpClient.post<AuthResponse>(Constants.BASE_URL + `auth/login?email=${this.login}&password=${this.password}`, {},{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'Application/json',
        'Accept': 'application/json',
      })
      }
      )
      .subscribe(async authResponse => {
        window.localStorage.setItem(Constants.LS_TOKEN_KEY, `${authResponse.token_type} : ${authResponse.access_token}`)
        window.localStorage.setItem(Constants.LS_TOKEN_EXP_KEY, `${authResponse.expires_at}`);
        await alertWait.dismiss();
        await this.navCtrl.navigateRoot(['./tabs']);
        console.log("ok")
      }, async (err) => {
        // changed
        console.log("not ok")
        await this.navCtrl.navigateRoot(['./tabs']);

        await alertWait.dismiss();
        const alertWait2 = await this.alertCtrl.create({
          header: "test " + JSON.stringify(err.message),
        });
        await alertWait2.present();
      })




  }

  register() {
    this.route.navigate(['./register']);
  }
  verification() {
    this.route.navigate(['./verification']);
  }
  country_code() {
    this.modalController.create({ component: CountryCodePage }).then((modalElement) => modalElement.present());
  }

  ngAfterViewInit(): void {
    // anime.timeline({ loop: false })
    //   .add({
    //     targets: '.logo .logo_img',
    //     delay: (el, i) => 1000 * i,
    //     scale: [50, 1],
    //     opacity: [0, 1],
    //     duration: 1500,
    //     easing: "easeOutExpo",
    //   })
  }
}
