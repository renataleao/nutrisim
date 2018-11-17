import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroductionPage } from '../pages/introduction/introduction';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { InfoPage } from '../pages/info/info';
import { AddPage } from '../pages/add/add';
import { SummaryPage } from '../pages/summary/summary';
import { DailyPage } from '../pages/daily/daily';
import { MenuPage } from '../pages/menu/menu';

let pages = [IntroductionPage,
  LoginPage,
  RegisterPage,
  InfoPage, AddPage, SummaryPage, DailyPage, MenuPage]

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    pages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
