import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss'],
})
export class SearchPlayerComponent implements OnInit,AfterViewInit {

  constructor(private modalController: ModalController) { }
  @Input() pseudo: string;
  ngOnInit() {}

  ngAfterViewInit() {
    
  }

  dismiss() {
    this.modalController.dismiss();
  } 

  searchClick(event: any) {
    this.pseudo = event.target.value;
    
  }

}
