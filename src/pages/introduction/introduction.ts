import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { InfoPage } from '../info/info';
import { MenuPage } from '../menu/menu';
import { SummaryPage } from '../summary/summary';
import { AddPage } from '../add/add';
import { DailyPage } from '../daily/daily';

/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendLoginPage() {
    this.navCtrl.push(LoginPage)
  }

  sendRegisterPage() {
    this.navCtrl.push(RegisterPage)
  }

}
