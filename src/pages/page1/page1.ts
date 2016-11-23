import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AlteraSenhaPage } from '../altera-senha/altera-senha';
import { User } from '../../models/user';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  usuario: User = <User>{};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public storage: Storage) {
    
    this.storage.get('user').then(user => this.usuario = user);

  }

  alterarSenha(){
    this.navCtrl.push(AlteraSenhaPage, this.usuario);
  }
}
