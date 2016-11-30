import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-cadastro-time',
  templateUrl: 'cadastro-time.html'
})
export class CadastroTimePage {
  divisao: any;
  principal: boolean;
  juniores: boolean;
  time: any = {};

  constructor(public params: NavParams, public viewCtrl: ViewController, public platform: Platform) { }

  ionViewWillEnter() {
    console.log("Will Enter");
    this.time = {};
  }

  cadastrar() {
    console.log("Principal: ", this.principal);
    console.log("Juniores", this.juniores);
    console.log("Time: ", this.time);
    this.viewCtrl.dismiss(this.time);
  }

  divisaoAlterada() {
    console.log(this.divisao);
  }
}
