import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuComponent} from  '../pages/menu/menu.component'
import {ItemDetaisPage} from "../pages/item-details/item-details.component";
import {AlertComponent} from "../pages/alert/alert.component";
import {BadgesComponent} from "../pages/badges/badges.component";
import {ButtonComponent} from "../pages/button/button.component";
import {CardsComponent} from "../pages/cards/cards.component";
import {CheckboxComponent} from "../pages/checkbox/checkbox.component";
import {DateTimeComponent} from "../pages/datetime/datetime.component";
import {FabsComponent} from "../pages/fabs/fabs.component";
import {GridComponent} from "../pages/grid/grid.component";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuComponent,
    ItemDetaisPage,
    AlertComponent,
    BadgesComponent,
    ButtonComponent,
    CardsComponent,
    CheckboxComponent,
    DateTimeComponent,
    FabsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuComponent,
    ItemDetaisPage,
    AlertComponent,
    BadgesComponent,
    ButtonComponent,
    CardsComponent,
    CheckboxComponent,
    DateTimeComponent,
    FabsComponent,
    GridComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
