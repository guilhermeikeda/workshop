import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image: string;
  album: string[] = [];
  endereco: string;
  times:any;

  constructor(public navCtrl: NavController, public http: Http, public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }


  tirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.album.push("data:image/jpeg;base64," + imageData);
      this.buscarPosicao();
    }, (err) => {
      console.log(err);
    });
  }

  buscarPosicao() {
    Geolocation.getCurrentPosition().then((resp) => {
      var latitude = resp.coords.latitude;
      var longitude = resp.coords.longitude;
      var latLong = latitude + ',' + longitude;

      var mapsUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLong + '&sensor=true';

      this.http.get(mapsUrl).subscribe((value: any) => {
        var body = JSON.parse(value._body);
        this.endereco = body.results[0].formatted_address;
      }, (error) => {
        console.log("Erro: ", error);
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  buscarTimes(event: any) {
    let nomeTime = event.target.value;

    this.toastCtrl.create({
      message: nomeTime,
      duration: 3000
    }).present();

    var url = 'https://api.cartolafc.globo.com/times?q=' + nomeTime;


    this.http.get(url).subscribe((resp) => {
      console.log(resp);
      this.endereco = 'sucesso';
      this.times = resp;
    }, (error) => {
      this.endereco = 'error';
      console.log(error);
    });

  }

  removerFoto(index: number) {
    this.toastCtrl.create({
      message: 'Sua foto foi deletada!',
      duration: 3000
    }).present();

    this.album.splice(index, 1);
  }
}
