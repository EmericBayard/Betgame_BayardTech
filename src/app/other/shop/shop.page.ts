import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

    showLoader: boolean;
    p_bar_value: number;
    p_bar_buffer: number;
    constructor() {
    }
  
    showProgressBar() {
      this.showLoader = true;
    }
  
    streamMedia() {
      this.showProgressBar()
      for (let index = 0; index <= 100; index++) {
        this.setPercentBar(index);
        this.setBufferBar(index)
      }
    }
  
    setPercentBar(i) {
      setTimeout(() => {
        let apc = (i / 100)
        console.log(apc);
        this.p_bar_value = apc;
      }, 300 * i);
    }
  
    setBufferBar(i) {
      setTimeout(() => {
        let apc = (i / 100)
        console.log(apc);
        this.p_bar_buffer = apc;
      }, 150 * i);
    }

  ngOnInit() {
  }
  
// <<<<<<< HEAD
// }
// =======
}

