import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Page1 } from '../page1/page1';

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
