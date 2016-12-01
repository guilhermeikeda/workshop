import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav')
  nav: Nav;

  page1: any;
  page2: any;

  constructor(public platform: Platform) {
    this.initializeApp();

    // Indica para o componente de Tab qual página deve ser a rootPage de cada tab.
    this.page1 = Page1;
    this.page2 = Page2;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.nav.setRoot(LoginPage);
    });
  }
}
