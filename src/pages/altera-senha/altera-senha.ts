import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AlteraSenha page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
