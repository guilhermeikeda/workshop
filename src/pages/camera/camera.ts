import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  base64Image: string;

  constructor(public navCtrl: NavController, ) {

  }

  tirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.FILE_URI,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      //this.base64Image = "data:image/jpeg;base64," + imageData;
      this.base64Image = imageData;
    }, (err) => {
      console.log(err);
    });
  }

  apagarFoto() {
    this.base64Image = null;
  }
}
