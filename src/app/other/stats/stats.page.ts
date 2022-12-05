import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges, ElementRef, ViewChild} from '@angular/core';

import { Chart } from 'chart.js';
import { AuthResponse } from 'src/models/api/auth_response';
import { Constants } from 'src/models/contants.models';




@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})

export class StatsPage implements OnInit, AfterViewInit,OnChanges, AfterViewChecked {


   faqExpand1: boolean;
   faqExpand2: boolean;
   faqExpand3: boolean;
   faqExpand4: boolean;
   faqExpand5: boolean;
   faqExpand6: boolean;
   faqExpand7: boolean;
   faqExpand8: boolean;
   faqExpand9: boolean; 

   @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
   doughnutChart: any;
  
    data = {
      winns: 0,
      tournament_won: 0,
      match_lose: 0, 
      winRate:0
    };
  
  constructor(
    private httpClient: HttpClient
  ) {
  }

  
  

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [63, 37],
          backgroundColor: [
            '#6535ea',
            '#153666',
          ],
          hoverBackgroundColor: [
            '#41268b',
            '#263e8b'
          ]
        }]
      }
    });   
  }


  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = { 'Authorization': 'Bearer '+Constants.API_AUTH_TOKEN };
    this.httpClient.get<AuthResponse>(Constants.BASE_URL + `auth/user-statistics`, {
      headers
    })
    .subscribe(async authResponse => {
      const r: any = authResponse;
      console.log(r);
      this.data.winns = r.winns;
      this.data.tournament_won = r.tournament_won;
      this.data.match_lose = r.match_lose;
      this.data.winRate = r.winRate; 
    }, async (err) => {
      console.log(err);
    });
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    this.doughnutChartMethod();
    
    // 
    // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, "#80b6f4");
    // gradientStroke.addColorStop(1, "#f49080");
    // this.doughnutChart.data.datasets.backgroundColor[0] = gradientStroke;
  }

 
  ngAfterViewChecked() {
    
  }


  


 reset(){
  this.faqExpand1=false;
  this.faqExpand2=false;
  this.faqExpand3=false;
  this.faqExpand4=false;
  this.faqExpand5=false;
  this.faqExpand6=false;
  this.faqExpand7=false;
  this.faqExpand8=false;
  this.faqExpand9=false;
	}
	faqExpandToggle1() {
  this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }

  faqExpandToggle2() {
  this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }
   faqExpandToggle3() {
  this.reset();
    this.faqExpand3 = !this.faqExpand3;
  } 
  faqExpandToggle4() {
   this.reset();
    this.faqExpand4 = !this.faqExpand4;
  }  
  faqExpandToggle5() {
   this.reset();
    this.faqExpand5 = !this.faqExpand5;
  }   
  faqExpandToggle6() {
   this.reset();
    this.faqExpand6 = !this.faqExpand6;
  }   
  faqExpandToggle7() {
   this.reset();
    this.faqExpand7 = !this.faqExpand7;
  }  
  faqExpandToggle8() {
   this.reset();
    this.faqExpand8 = !this.faqExpand8;
  } 
 faqExpandToggle9() {
   this.reset();
    this.faqExpand9 = !this.faqExpand9;
  } 
}