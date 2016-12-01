import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';

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
    //this.navCtrl.pop();
  }

  ionViewWillLeave() {
    console.log("[ALTERARSENHA] Will Leave");
    this.navCtrl.setRoot(Page1);
  }

  ionViewDidLeave() {
    console.log("[ALTERARSENHA] Did Leave")
  }

}
