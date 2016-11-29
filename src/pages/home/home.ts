import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { Camera, Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
import { CadastroTimePage } from '../cadastro-time/cadastro-time';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image: string;
  album: string[] = [];
  endereco: string;
  times: any;
  loader: any;
  constructor(public navCtrl: NavController, public http: Http,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.loader = this.loadingCtrl.create({
      content: 'Aguarde..',
      duration: 2000
    });

    this.times = [
      {
        "time_id": 5272330,
        "nome": "F.C. Ikeda",
        "nome_cartola": "kaká",
        "slug": "f-c-ikeda",
        "facebook_id": null,
        "url_escudo_png": "https://s2.glbimg.com/GIUu6di8fx6_pAfSUdyuF1HU23A=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_20/escudo/87/02/45/007017388720160824160245",
        "url_escudo_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/svg_v2/escudo/005861392220160601204155",
        "foto_perfil": "https://cartolafc.globo.com/static/img/placeholder_perfil.png",
        "assinante": false,
        "pontuacao": "120,00"
      },
      {
        "time_id": 632591,
        "nome": "IKEDA F.C",
        "nome_cartola": "Guilherme",
        "slug": "ikeda-f-c",
        "facebook_id": null,
        "url_escudo_png": "https://s2.glbimg.com/GIUu6di8fx6_pAfSUdyuF1HU23A=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_20/escudo/87/02/45/007017388720160824160245",
        "url_escudo_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_3/escudo/11/25/15/003576001120160727112515",
        "foto_perfil": "",
        "assinante": false,
        "pontuacao": "110,00"
      },
      {
        "time_id": 1847862,
        "nome": "IKEDA  F.C",
        "nome_cartola": "Japa",
        "slug": "ikeda--fc",
        "facebook_id": 100002744813740,
        "url_escudo_png": "https://s2.glbimg.com/GIUu6di8fx6_pAfSUdyuF1HU23A=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_20/escudo/87/02/45/007017388720160824160245",
        "url_escudo_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_4/escudo/14/21/13/003973381420160727142113",
        "foto_perfil": "",
        "assinante": false,
        "pontuacao": "100,00"
      },
      {
        "time_id": 6750689,
        "nome": "Ikeda de madrid f.c",
        "nome_cartola": "Savio Daniel",
        "slug": "ikeda-de-madrid-f-c",
        "facebook_id": null,
        "url_escudo_png": "https://s2.glbimg.com/GIUu6di8fx6_pAfSUdyuF1HU23A=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_20/escudo/87/02/45/007017388720160824160245",
        "url_escudo_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/svg_v5/escudo/02/54/57/007258990220160705135457",
        "foto_perfil": "",
        "assinante": false,
        "pontuacao": "90,00"
      },
      {
        "time_id": 5763897,
        "nome": "tabajara f.C ikeda",
        "nome_cartola": "bugalu",
        "slug": "tabajara-f-c-ikeda",
        "facebook_id": 823280731019701,
        "url_escudo_png": "https://s2.glbimg.com/GIUu6di8fx6_pAfSUdyuF1HU23A=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_20/escudo/87/02/45/007017388720160824160245",
        "url_escudo_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_20/escudo/87/02/45/007017388720160824160245",
        "foto_perfil": "https://graph.facebook.com/v2.2/823280731019701/picture?width=100&height=100",
        "assinante": false,
        "pontuacao": "80,00"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

  cadastrarTime() {
    this.modalCtrl.create(CadastroTimePage).present();
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
    this.loader.present();
    this.toastCtrl.create({
      message: nomeTime,
      duration: 3000
    }).present();
    this.loader.dismiss();
  }

  removerFoto(index: number) {
    this.toastCtrl.create({
      message: 'Sua foto foi deletada!',
      duration: 3000
    }).present();

    this.album.splice(index, 1);
  }
}
