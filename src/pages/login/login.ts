import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, menu: MenuController) {
    this.formulario = {};
    menu.swipeEnable(false);
  }

  entrar() {
    this.navCtrl.setRoot(Page1, {
      usuario: this.formulario
    });
  }

}
