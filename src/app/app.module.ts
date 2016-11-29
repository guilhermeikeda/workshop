import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraPage } from '../pages/camera/camera';
import { GeoLocationPage } from '../pages/geo-location/geo-location';
import { HomePage } from '../pages/home/home';
import { CadastroTimePage } from '../pages/cadastro-time/cadastro-time';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    HomePage,
    GeoLocationPage,
    CadastroTimePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    HomePage,
    GeoLocationPage,
    CadastroTimePage
  ],
  providers: []
})
export class AppModule { }
