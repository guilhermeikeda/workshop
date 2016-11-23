import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GeoLocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-geo-location',
  templateUrl: 'geo-location.html'
})
export class GeoLocationPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GeoLocationPage Page');
  }

}
