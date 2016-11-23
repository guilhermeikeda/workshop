import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AlteraSenhaPage } from '../altera-senha/altera-senha';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  usuario: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public storage: Storage) {
    this.usuario = navParams.get('usuario');    
  }

  alterarSenha(){
    this.navCtrl.push(AlteraSenhaPage, this.usuario);
  }
}
