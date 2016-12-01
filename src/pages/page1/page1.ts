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
    console.log("Constructor called");
    this.usuario = navParams.get('usuario');
    if (this.usuario == null) {
      this.usuario = {
        nome: "Sem nome",
        password: ""
      }
    }
  }

  ionViewDidLoad() {
    console.log("Did load");
  }

  ionViewDidEnter() {
    console.log("Did Enter");
  }

  ionViewWillEnter() {
    console.log("Will Enter");
  }

  ionViewWillLeave() {
    console.log("Will leave")
  }

  ionViewDidLeave() {
    console.log("Did Leave");
  }

  ionViewWillUnload() {
    console.log("Will Unload");
  }

  alterarSenha() {
    this.navCtrl.push(AlteraSenhaPage, this.usuario);
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
