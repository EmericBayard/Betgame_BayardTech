import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { PlayerInfoPage } from '../../player/player-info/player-info.page';
import { StatsPage } from '../../other/stats/stats.page';
import { SearchPlayerComponent } from '../../player/search-player/search-player.component';
@Component({
   selector: 'app-create-new-team',
   templateUrl: './create-new-team.page.html',
   styleUrls: ['./create-new-team.page.scss'],
})
export class CreateNewTeamPage implements OnInit {
   savePlayer1 = false;
   savePlayer2 = true;
   savePlayer3 = false;
   savePlayer4 = false;
   savePlayer5 = true;
   savePlayer6 = true;
   savePlayer7 = false;
   savePlayer8 = false;
   savePlayer9 = false;
   savePlayer10 = false;
   savePlayer11 = false;
   savePlayer12 = false;
   savePlayer13 = false;
   savePlayer14 = false;
   savePlayer15 = false;
   savePlayer16 = false;
   savePlayer17 = false;
   savePlayer18 = false;
   savePlayer19 = false;
   savePlayer20 = false;
   savePlayer21 = false;
   savePlayer22 = false;
   savePlayer23 = false;
   savePlayer24 = false;
   savePlayer25 = false;
   savePlayer26 = false;
   savePlayer27 = false;
   savePlayer28 = false;
   savePlayer29 = false;
   savePlayer30 = false;
   savePlayer31 = false;
   savePlayer32 = false;
   savePlayer33 = false;
   savePlayer34 = false;
   savePlayer35 = false;
   savePlayer36 = false;
   savePlayer37 = false;
   savePlayer38 = false;
   savePlayer39 = false;
   savePlayer40 = false;
   savePlayer41 = false;
   savePlayer42 = false;
   savePlayer43 = false;
   savePlayer44 = false;
   savePlayer45 = false;
   savePlayer46 = false;
   savePlayer47 = false;
   savePlayer48 = false;
   savePlayer49 = false;
   savePlayer50 = false;
   savePlayer51 = false;
   savePlayer52 = false;
   savePlayer53 = false;
   savePlayer54 = false;
   savePlayer55 = false;

   segment = 0;
   @ViewChild('slides', { static: true }) slider: IonSlides;
   constructor(private route: Router,   private modalController: ModalController) { }

   ngOnInit() {
   }
   addPlayer1() {
      this.savePlayer1 = !this.savePlayer1;
   }addPlayer2() {
      this.savePlayer2 = !this.savePlayer2;
   } addPlayer3() {
      this.savePlayer3 = !this.savePlayer3;
   } addPlayer4() {
      this.savePlayer4 = !this.savePlayer4;
   } addPlayer5() {
      this.savePlayer5 = !this.savePlayer5;
   } addPlayer6() {
      this.savePlayer6 = !this.savePlayer6;
   } addPlayer7() {
      this.savePlayer7 = !this.savePlayer7;
   } addPlayer8() {
      this.savePlayer8 = !this.savePlayer8;
   } addPlayer9() {
      this.savePlayer9 = !this.savePlayer9;
   } addPlayer10() {
      this.savePlayer10 = !this.savePlayer10;
   } addPlayer11() {
      this.savePlayer11 = !this.savePlayer11;
   } addPlayer12() {
      this.savePlayer12 = !this.savePlayer12;
   } addPlayer13() {
      this.savePlayer13 = !this.savePlayer13;
   } addPlayer14() {
      this.savePlayer14 = !this.savePlayer14;
   } addPlayer15() {
      this.savePlayer15 = !this.savePlayer15;
   } addPlayer16() {
      this.savePlayer16 = !this.savePlayer16;
   } addPlayer17() {
      this.savePlayer17 = !this.savePlayer17;
   } addPlayer18() {
      this.savePlayer18 = !this.savePlayer18;
   } addPlayer19() {
      this.savePlayer19 = !this.savePlayer19;
   } addPlayer20() {
      this.savePlayer20 = !this.savePlayer20;
   } addPlayer21() {
      this.savePlayer21 = !this.savePlayer21;
   } addPlayer22() {
      this.savePlayer22 = !this.savePlayer22;
   } addPlayer23() {
      this.savePlayer23 = !this.savePlayer23;
   } addPlayer24() {
      this.savePlayer24 = !this.savePlayer24;
   } addPlayer25() {
      this.savePlayer25 = !this.savePlayer25;
   } addPlayer26() {
      this.savePlayer26 = !this.savePlayer26;
   } addPlayer27() {
      this.savePlayer27 = !this.savePlayer27;
   } addPlayer28() {
      this.savePlayer28 = !this.savePlayer28;
   } addPlayer29() {
      this.savePlayer29 = !this.savePlayer29;
   } addPlayer30() {
      this.savePlayer30 = !this.savePlayer30;
   } addPlayer31() {
      this.savePlayer31 = !this.savePlayer31;
   } addPlayer32() {
      this.savePlayer32 = !this.savePlayer32;
   } addPlayer33() {
      this.savePlayer33 = !this.savePlayer33;
   } addPlayer34() {
      this.savePlayer34 = !this.savePlayer34;
   } addPlayer35() {
      this.savePlayer35 = !this.savePlayer35;
   } addPlayer36() {
      this.savePlayer36 = !this.savePlayer36;
   } addPlayer37() {
      this.savePlayer37 = !this.savePlayer37;
   } addPlayer38() {
      this.savePlayer38 = !this.savePlayer38;
   } addPlayer39() {
      this.savePlayer39 = !this.savePlayer39;
   } addPlayer40() {
      this.savePlayer40 = !this.savePlayer40;
   } addPlayer41() {
      this.savePlayer41 = !this.savePlayer41;
   } addPlayer42() {
      this.savePlayer42 = !this.savePlayer42;
   } addPlayer43() {
      this.savePlayer43 = !this.savePlayer43;
   } addPlayer44() {
      this.savePlayer44 = !this.savePlayer44;
   }addPlayer45() {
      this.savePlayer45 = !this.savePlayer45;
   }addPlayer46() {
      this.savePlayer46 = !this.savePlayer46;
   }addPlayer47() {
      this.savePlayer47 = !this.savePlayer47;
   }addPlayer48() {
      this.savePlayer48 = !this.savePlayer48;
   }addPlayer49() {
      this.savePlayer49 = !this.savePlayer49;
   }addPlayer50() {
      this.savePlayer50 = !this.savePlayer50;
   }addPlayer51() {
      this.savePlayer51 = !this.savePlayer51;
   }addPlayer52() {
      this.savePlayer52 = !this.savePlayer52;
   }addPlayer53() {
      this.savePlayer53 = !this.savePlayer53;
   }addPlayer54() {
      this.savePlayer54 = !this.savePlayer54;
   }addPlayer55() {
      this.savePlayer55 = !this.savePlayer55;
   }

   async segmentChanged() {
      await this.slider.slideTo(this.segment);
   }

   async slideChanged() {
      this.segment = await this.slider.getActiveIndex();
   }
   team_preview() {
      this.route.navigate(['./team-preview']);
   }
   edit_team() {
      this.route.navigate(['./edit-team']);
   }
   choose_captain() {
      this.route.navigate(['./choose-captain']);
   }
   player_info() {
    this.modalController.create({ component: PlayerInfoPage }).then((modalElement) => modalElement.present());
  }

  async searchModal() {
    const modal = await this.modalController.create({
      component:  SearchPlayerComponent,
      cssClass: '',
      componentProps: {
         'pseudo': 'Douglas',
         }
      });
   return await modal.present();
  }

}
