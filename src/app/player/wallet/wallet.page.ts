import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges, ElementRef, ViewChild} from '@angular/core';

import { Chart } from 'chart.js';





@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit, AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;
  playerName:any;
  constructor() {
    this.playerName = "Harmate";
  }

  doughnutChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        datasets: [{
          label: 'BetCoin',
          backgroundColor: 'rgba(198, 234, 206, 1)',
          data: [65, 59, 80, 81, 56, 55, 40, 90, 78, 46, 92,72],
          fill: false,
          borderColor: 'rgba(198, 234, 206, 1)',
          tension: 0.1
        }]
      },
      options: {
        legend:{
          display: false
        }
      }
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

}
