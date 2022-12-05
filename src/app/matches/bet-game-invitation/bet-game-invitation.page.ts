import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TermsComponent} from "./components/terms.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './bet-game-invitation.page.html',
  styleUrls: ['./bet-game-invitation.page.scss'],
})
export class BetGameInvitationPage implements OnInit {
  public checked ;
  public isModalOpen;
  message = 'This modal example uses the modalController to present and dismiss modals.';
  constructor(private route: Router,private modalCtrl: ModalController) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TermsComponent,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    let script = document.createElement("script");
    script.src='assets/Js/betgameinvitation.js'
    script.type= "text/JavaScript"
    document.head.appendChild(script);
  }

 verification(){
     this.route.navigate(['./verification']).then();
   }


   async terms() {
     const modal = await this.modalCtrl.create({
       component: TermsComponent,
     });
     await modal.present();
     const {data, role} = await modal.onWillDismiss();
       this.checked = (role === 'confirm');
   }
}
