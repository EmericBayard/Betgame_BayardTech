import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-knockout',
  templateUrl: './knockout.page.html',
  styleUrls: ['./knockout.page.scss'],
})
export class KnockoutPage implements OnInit {

@ViewChild('canvas') canvasEl : ElementRef;
@ViewChild('content') content : ElementRef;
  private canvas : any;
  private ctx : any;
  private _OPTIONS : any;


  ngAfterViewInit() : void
  {
    this.canvas = this.canvasEl.nativeElement;
    // window.addEventListener('resize', () => { this.scaleCanvas(this.canvasEl); });
    // this.canvas.width  	= 0;
    // this.canvas.height 	= 0;

    this.setupCanvas();
  }

  setupCanvas() : void
  {
    this._OPTIONS  = {
      width: 3,
      color: '#BBB',
      radius: 15,
      regionSelector: '.region'
    }
    this.ctx = this.canvas.getContext('2d');
    // this.bindEvents();
  }
  // bindEvents() {
    // window.addEventListener('resize', () => { this.scaleCanvas(this.canvasEl); });
    //
    // $(window).on('resize', this.render.bind(this));
  //
  // $('.team').on({
  //                 mouseenter: function(e) {
  // $('.team-' + $(this).attr('data-team'))
// .addClass('team-hover')
// .css('background', $(this).css('border-left-color'));
// },
// mouseleave: function(e) {
//   $('.team-' + $(this).attr('data-team'))
//     .removeClass('team-hover')
//     .css('background', '');
// }
// });
// },

    constructor() {
    }

  ngOnInit() {

  }
  ionViewDidEnter(){
    let script = document.createElement("script");
    script.src='assets/Js/competition.js'
    script.type= "text/JavaScript"
    document.head.appendChild(script);
  }


}

