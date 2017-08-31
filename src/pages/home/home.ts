import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuComponent } from '../menu/menu.component';
import {AlertComponent} from "../alert/alert.component";
import {BadgesComponent} from "../badges/badges.component";
import {ButtonComponent} from "../button/button.component";
import {CardsComponent} from "../cards/cards.component";
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {DateTimeComponent} from "../datetime/datetime.component";
import {FabsComponent} from "../fabs/fabs.component";
import {GridComponent} from "../grid/grid.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 constructor(public navCtrl: NavController) {

  }
  nextPage() {
    console.log("c0");
      // Let's navigate from TabsPage to Page1
     this.navCtrl.push(MenuComponent);
   }

  nextAlert(){
    this.navCtrl.push(AlertComponent);
  }

  nextBadges(){
    this.navCtrl.push(BadgesComponent);
  }
  nextButton(){
    this.navCtrl.push(ButtonComponent);
  }
  nextCard(){
    this.navCtrl.push(CardsComponent);
  }
  nextCheckbox(){
    this.navCtrl.push(CheckboxComponent);
  }
  nextDateTime(){
    this.navCtrl.push(DateTimeComponent);
  }
  nextFabs(){
    this.navCtrl.push(FabsComponent);
  }
  nextGrid(){
     this.navCtrl.push(GridComponent);
  }

}
