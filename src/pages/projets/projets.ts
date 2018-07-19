import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';

/**
 * Generated class for the ProjetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projets',
  templateUrl: 'projets.html',
})
export class ProjetsPage {

  repositories: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private data: DataProvider) {
    this.enableMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetsPage');
    this.data
      .getRepositories()
      .subscribe(repositories => {
        this.repositories = repositories
        console.log(this.repositories);
      });
  }

  enableMenu() {
    this.menuCtrl.enable(true, 'left-menu');
  }

}
