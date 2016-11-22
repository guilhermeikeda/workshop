import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Page1 } from '../page1/page1';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  formulario: any;

  constructor(public navCtrl: NavController, public tabs: Tabs) {
    this.formulario = {};
    this.showTabs(false);
  }

  entrar() {
    this.navCtrl.setRoot(Page1, {
      usuario: this.formulario
    });
    this.showTabs(true);
  }


  private showTabs(showTabs: boolean) {
    this.tabs._tabs.forEach((tab) => {
      tab.show = showTabs;
    });
  }
}
