import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, ElementRef, ViewChild} from '@angular/core';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Player } from './player';
import { ModalStatsEditComponent } from '../modal-stats-edit/modal-stats-edit.component';
@Component({
  selector: 'app-modal-stats',
  templateUrl: './modal-stats.component.html',
  styleUrls: ['./modal-stats.component.scss']
})


export class ModalStatsComponent implements OnInit, AfterViewInit {
    @Input()
    joueur1: any;
    joueur2: any;
    P1stats: Player;
    P2stats: Player;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.P1stats = {
      tirs: 17,
      home_user_id_score: 5,
      possession: 76,
      precision_des_tirs: 43,
      chances: 3,
      hors_jeu: 10,
      penaltys: 10,
      precision_des_passes: 90,
      away_user_id_score: 10,
      type: 'Player'
    };
    this.P2stats = {
      tirs: 10,
      home_user_id_score: 10,
      possession: 24,
      precision_des_tirs: 50,
      chances: 1,
      hors_jeu: 10,
      penaltys: 10,
      precision_des_passes: 10,
      away_user_id_score: 2,
      type: 'Player'
    };
    console.log(this.joueur1); 
    this.P1stats.tirs = parseInt(JSON.stringify(this.joueur1.tirs), 10);
    this.P1stats.home_user_id_score = parseInt(JSON.stringify(this.joueur1.homeUserIdScore), 10);
    //console.log("P1 : "+JSON.stringify(this.P1stats.away_user_id_score));
    this.P1stats.possession = parseInt(JSON.stringify(this.joueur1.possession), 10);
    this.P1stats.precision_des_tirs = parseInt(JSON.stringify(this.joueur1.precisionTir), 10);
    this.P1stats.chances = parseInt(JSON.stringify(this.joueur1.chances), 10);
    this.P1stats.hors_jeu = parseInt(JSON.stringify(this.joueur1.horsjeu), 10);
    this.P1stats.penaltys = parseInt(JSON.stringify(this.joueur1.penaltys), 10);
    this.P1stats.precision_des_passes = parseInt(JSON.stringify(this.joueur1.precisionPasse), 10);

    this.P2stats.tirs = parseInt(JSON.stringify(this.joueur2.tirs), 10);
    this.P2stats.away_user_id_score = parseInt(JSON.stringify(this.joueur2.homeUserIdScore), 10);
    //console.log("P1 : "+JSON.stringify(this.P1stats.away_user_id_score));
    this.P2stats.possession = parseInt(JSON.stringify(this.joueur2.possession), 10);
    this.P2stats.precision_des_tirs = parseInt(JSON.stringify(this.joueur2.precisionTir), 10);
    this.P2stats.chances = parseInt(JSON.stringify(this.joueur2.chances), 10);
    this.P2stats.hors_jeu = parseInt(JSON.stringify(this.joueur2.horsjeu), 10);
    this.P2stats.penaltys = parseInt(JSON.stringify(this.joueur2.penaltys), 10);
    this.P2stats.precision_des_passes = parseInt(JSON.stringify(this.joueur2.precisionPasse), 10);
    
  }

  ngAfterViewInit() {
    
  }

  setBarPercentile(value){
    let styles = {
      'max-width': value+'%',
      'height' : '100%'
      // 'background-color' : 'blue',
      
    };
    return styles;
  }

  setBar(p1, p2, p3){
    let calc = (100/(p1+p2))*p3;
    let styles = {
      'max-width': calc+'%',
      'height' : '100%'
    };
    //console.log(styles);
    return styles;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async editValues(joueur1: any, joueur2: any): Promise<void>{
    const modal = await this.modalCtrl.create({
      component: ModalStatsEditComponent,
      componentProps: {
        P1stats: joueur1,
        P2stats: joueur2
      }
    })
    return await modal.present();
  }

}
