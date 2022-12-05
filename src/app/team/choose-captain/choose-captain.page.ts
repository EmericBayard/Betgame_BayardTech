import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-captain',
  templateUrl: './choose-captain.page.html',
  styleUrls: ['./choose-captain.page.scss'],
})
export class ChooseCaptainPage implements OnInit {
  captain1: boolean;
  captain2: boolean;
  captain3: boolean;
  captain4: boolean;
  captain5: boolean;
  captain6: boolean;
  captain7: boolean;
  captain8: boolean;
  captain9: boolean;
  captain10: boolean;
  captain11: boolean;

  viceCaptain1: boolean;
  viceCaptain2: boolean;
  viceCaptain3: boolean;
  viceCaptain4: boolean;
  viceCaptain5: boolean;
  viceCaptain6: boolean;
  viceCaptain7: boolean;
  viceCaptain8: boolean;
  viceCaptain9: boolean;
  viceCaptain10: boolean;
  viceCaptain11: boolean;

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  resetCaptain() {
    this.captain1 = false;
    this.captain2 = false;
    this.captain3 = false;
    this.captain4 = false;
    this.captain5 = false;
    this.captain6 = false;
    this.captain7 = false;
    this.captain8 = false;
    this.captain9 = false;
    this.captain10 = false;
    this.captain11 = false;
  }

  ViceCaptain() {
    this.viceCaptain1 = false;
    this.viceCaptain2 = false;
    this.viceCaptain3 = false;
    this.viceCaptain4 = false;
    this.viceCaptain5 = false;
    this.viceCaptain6 = false;
    this.viceCaptain7 = false;
    this.viceCaptain8 = false;
    this.viceCaptain10 = false;
    this.viceCaptain11 = false;
  }

  edit_team() {
    this.route.navigate(['./edit-team']);
  }

  chooseCaptain1() {
    this.resetCaptain();
    this.captain1 = !this.captain1;
  }
  reset() {
    throw new Error('Method not implemented.');
  }
  chooseCaptain2() {
    this.resetCaptain();
    this.captain2 = !this.captain2;
  } 
  chooseCaptain3() {
    this.resetCaptain();
    this.captain3 = !this.captain3;
  } 
  chooseCaptain4() {
    this.resetCaptain();
    this.captain4 = !this.captain4;
  } 
  chooseCaptain5() {
    this.resetCaptain();
    this.captain5 = !this.captain5;
  } 
  chooseCaptain6() {
    this.resetCaptain();
    this.captain6 = !this.captain6;
  } 
  chooseCaptain7() {
    this.resetCaptain();
    this.captain7 = !this.captain7;
  } 
  chooseCaptain8() {
    this.resetCaptain();
    this.captain8 = !this.captain8;
  } 
  chooseCaptain9() {
    this.resetCaptain();
    this.captain9 = !this.captain9;
  } 
  chooseCaptain10() {
    this.resetCaptain();
    this.captain10 = !this.captain10;
  } 
  chooseCaptain11() {
    this.resetCaptain();
    this.captain11 = !this.captain11;
  } 
 
  chooseViceCaptain1() {
    this.ViceCaptain();
    this.viceCaptain1 = !this.viceCaptain1;
  } 
  chooseViceCaptain2() {
    this.ViceCaptain();
    this.viceCaptain2 = !this.viceCaptain2;
  } 
  chooseViceCaptain3() {
    this.ViceCaptain();
    this.viceCaptain3 = !this.viceCaptain3;
  }
   chooseViceCaptain4() {
    this.ViceCaptain();
    this.viceCaptain4 = !this.viceCaptain4;
  } 
  chooseViceCaptain5() {
    this.ViceCaptain();
    this.viceCaptain5 = !this.viceCaptain5;
  } 
  chooseViceCaptain6() {
    this.ViceCaptain();
    this.viceCaptain6 = !this.viceCaptain6;
  } 
  chooseViceCaptain7() {
    this.ViceCaptain();
    this.viceCaptain7 = !this.viceCaptain7;
  } 
  chooseViceCaptain8() {
    this.ViceCaptain();
    this.viceCaptain8 = !this.viceCaptain8;
  } 
  chooseViceCaptain9() {
    this.ViceCaptain();
    this.viceCaptain9 = !this.viceCaptain9;
  }
  chooseViceCaptain10() {
    this.ViceCaptain();
    this.viceCaptain10 = !this.viceCaptain10;
  }
  chooseViceCaptain11() {
    this.ViceCaptain();
    this.viceCaptain11 = !this.viceCaptain11;
  }

 tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
    
  } 
}
