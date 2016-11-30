import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-geo-location',
  templateUrl: 'geo-location.html'
})
export class GeoLocationPage {
  latitude: any;
  longitude: any;
  endereco: any;

  constructor(public navCtrl: NavController, public http: Http) { }

  ionViewDidLoad() {
  }

  buscarPosicao() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=-23.571188,-46.699376&sensor=true').subscribe((value: any) => {
        var body = JSON.parse(value._body);
        this.endereco = body.results[0].formatted_address;
      }, (error) => {
        console.log("Erro: ", error);
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
