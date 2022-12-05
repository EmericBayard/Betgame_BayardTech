import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


import { Chart } from 'chart.js';
import { AuthResponse } from 'src/models/api/auth_response';
import { Constants } from 'src/models/contants.models';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3','S4','S5','S6'],
        datasets: [{
          label: '',
          data: [3, 1, 2, 0, 4, 1],
          backgroundColor: 'rgb(176, 2, 142)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(250, 250, 250)',// array should have same number of elements as number of dataset
          borderWidth: 1.5,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  pseudo: string
  jeux_favoris: string
  email: string
  phone: string
  date_birth_date: string
  /* Added items */
  account_id: number 
  team_id: number
  user_platform: string

  constructor(
    private alertController: AlertController, 
    private navCtrl: NavController,
    private route: Router,
    private httpClient: HttpClient,    
   ) { }

  ngOnInit() {
    this.myprofile()
  }



  async myprofile() {

    const alertWait = await this.alertController.create({
      header: "Inscription en cours..."
    });


    await alertWait.present();
    var url = Constants.BASE_URL + `auth/user-details?user_id=1`;
    console.log(window.localStorage.getItem('tokenAuth').split(':')[1])
    this.httpClient.get<AuthResponse>(url, {
      headers: {
        "Authorization": "Bearer "+window.localStorage.getItem('tokenAuth').split(':')[1]
      }
    })
    .subscribe(
      async authResponse => {
        console.log(authResponse)
        this.pseudo = authResponse['name']
        this.email = authResponse['email']
        this.jeux_favoris = authResponse['game_favoris']
        this.date_birth_date = authResponse['date_birth_date']
        this.phone = authResponse['phone']
        this.account_id = authResponse['id']
        this.team_id = authResponse['current_team_id']
        this.user_platform =  authResponse['user_platforme']
        await alertWait.dismiss();
      }, 
      async (err) => {
        console.log(err)
        await alertWait.dismiss();
      }
      );
  }


  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      mode:'md',
      cssClass: 'animate__animated animate__zoomIn',    
       buttons: [
        {
          text: 'No',
          role: 'cancel', 
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },{
          text: 'Yes', 
          handler: () => {
             this.navCtrl.navigateRoot(['./sign-in']);
          }
        }
      ]    
    });

    await alert.present();
  }

  
}