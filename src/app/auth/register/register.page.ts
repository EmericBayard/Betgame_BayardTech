import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from 'src/models/api/auth_response';
import { Constants } from 'src/models/contants.models';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email = 'betgame@gmail.com';
  password = 'betgame12';
  name = 'betgame12';
  address = 'busi.travail@gmail.co';
  phone = 0;
  gender = 'males';
  game = 'males';

  constructor(
    private route: Router,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  onChangeName(newValue) {
    console.log(newValue.target.value)
    this.name = newValue.target.value
  }

  onChangeEmail(newValue) {
    console.log(newValue.target.value)
    this.email = newValue.target.value
  }


  onChangeAdresse(newValue) {
    console.log(newValue.target.value)
    this.address = newValue.target.value
  }
  
  onChangePhone(newValue) {
    console.log(newValue.target.value)
    this.phone = newValue.target.value

  }

  onChangeGame(newValue) {
    console.log(newValue.target.value)
    this.game = newValue.target.value
  }

  onChangeGenre(newValue) {
    console.log(newValue.target.value)
    this.gender = newValue.target.value
  }

  onChangePassword(newValue) {
    console.log(newValue.target.value)
    this.password = newValue.target.value
  }

  async register() {

    
    //await alertWait.present();
    var url = Constants.BASE_URL + `auth/register?name=${this.name}&email=${this.email}&password=${this.password}&address=${this.address}&gender=${this.gender}`;
    const test = this.httpClient.post<any>(url, {})
    .subscribe(
      async authResponse => {
        //console.log(authResponse.message)
        const l = authResponse.message
        const b = await this.alertCtrl.create({
          header: l,
          buttons: ['Continuer'],
        });
        await b.present();
        //await b.dismiss();
        
        
        setTimeout(() => 
          {
            document.location.href = '/sign-in';
          },
        2500);
      },
      async (err) => {
        const s = err.error.error.email
        const a = await this.alertCtrl.create({
          header: s,
          buttons: ['Continuer'],
        });
        await a.present();
        //await a.dismiss();
      }
      );
      
  }

  verification(){ 
    this.route.navigate(['./verification']);
  } 
}