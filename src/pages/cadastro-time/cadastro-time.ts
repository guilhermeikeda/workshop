import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
/*
  Generated class for the CadastroTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro-time',
  templateUrl: 'cadastro-time.html'
})
export class CadastroTimePage {

  constructor(public params: NavParams, public viewCtrl: ViewController, public platform: Platform) { }

  ionViewDidLoad() {
    console.log('Hello CadastroTimePage Page');
  }

  cadastrar(){
    this.viewCtrl.dismiss();
  }
}
