import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProLabDetailPage } from '../pro-lab-detail/pro-lab-detail';

/**
 * Generated class for the ProLabListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pro-lab-list',
  templateUrl: 'pro-lab-list.html',
})
export class ProLabListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProLabListPage');
  }

  labExeDetail(){
    this.navCtrl.push(ProLabDetailPage);
  }
}
