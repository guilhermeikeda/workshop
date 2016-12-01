import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Constructor Page2 Called");
  }

  goPage3() {
    this.navCtrl.push(Page3);
  }

}
