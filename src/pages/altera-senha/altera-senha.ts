import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-altera-senha',
  templateUrl: 'altera-senha.html'
})
export class AlteraSenhaPage {
  nome: any;
  password: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.nome = navParams.get('nome');
    this.password = navParams.get('password');
  }

  voltar() {
    this.navCtrl.pop();
  }

}
