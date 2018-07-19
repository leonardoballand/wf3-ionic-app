import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');

    this.geolocation
      .getCurrentPosition()
      .then(response => {
        this.lat = response.coords.latitude;
        this.lng = response.coords.longitude;
      })
      .catch(err => console.log('erreur de récupération', err))

    this.geolocation
      .watchPosition()
      .subscribe(pos => console.log(pos.coords.latitude, pos.coords.longitude))
  }

}
