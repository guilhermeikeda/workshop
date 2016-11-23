import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  constructor(public navCtrl: NavController, 
              public menu: MenuController, 
              public storage: Storage) {
    this.formulario = {};
    menu.swipeEnable(false);
  }

  entrar() {
    console.log(this.formulario);
    this.storage.set('user', this.formulario);
    this.navCtrl.setRoot(Page1, {
      usuario: this.formulario
    });
  }

}
