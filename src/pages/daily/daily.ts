import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';

/**
 * Generated class for the DailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html',
})
export class DailyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendAddPage() {
    this.navCtrl.push(AddPage)
  }
  
}
