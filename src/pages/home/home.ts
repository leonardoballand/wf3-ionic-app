import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProjetsPage } from '../projets/projets';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
    this.disableMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  disableMenu() {
    this.menuCtrl.enable(false, 'left-menu');
  }

  startApp() {
    console.log("button tapped");
    this.navCtrl.setRoot(ProjetsPage);
  }

}
