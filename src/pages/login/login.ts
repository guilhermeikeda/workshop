import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Page1 } from '../page1/page1';

import { User } from '../../models/user';

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
  formulario: User = <User>{};

  constructor(public navCtrl: NavController, 
              public menu: MenuController, 
              public storage: Storage) {   
    
    menu.swipeEnable(false);
  }

  entrar() {
    let user: User = <User>this.formulario;

    this.storage
        .set('user', user)
        .then(() => {
          this.navCtrl.setRoot(Page1);
        });    
  }

}
