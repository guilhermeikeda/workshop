import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlteraSenhaPage } from '../altera-senha/altera-senha';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  usuario: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.usuario = navParams.get('usuario');
    if (this.usuario == null) {
      this.usuario = {
        nome: "Sem nome",
        password: ""
      }
    }
  }

  alterarSenha() {
    this.navCtrl.push(AlteraSenhaPage, this.usuario);
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
