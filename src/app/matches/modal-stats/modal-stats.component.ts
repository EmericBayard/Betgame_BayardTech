import { ModalController } from '@ionic/angular';
import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-modal-stats',
  templateUrl: './modal-stats.component.html',
  styleUrls: ['./modal-stats.component.scss'],
})

export class ModalStatsComponent implements OnInit, AfterViewInit {
        joueur1: any;
        joueur2: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.joueur1)
    console.log(this.joueur2)
  }

  setPossession(){
    let styles = {
      'width': this.joueur1.possession + '%',
      'background-color' : 'blue',
      'height' : '100%'
    };
    return styles;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
