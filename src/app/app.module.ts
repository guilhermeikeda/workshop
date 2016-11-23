import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraPage } from '../pages/camera/camera';
import { GeoLocationPage } from '../pages/geo-location/geo-location';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    GeoLocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    GeoLocationPage
  ],
  providers: []
})
export class AppModule { }
