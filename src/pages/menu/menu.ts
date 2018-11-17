import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DailyPage } from '../daily/daily';
import { SummaryPage } from '../summary/summary';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendDailyPage() {
    this.navCtrl.push(DailyPage)
  }

  sendSummaryPage() {
    this.navCtrl.push(SummaryPage)
  }
}
