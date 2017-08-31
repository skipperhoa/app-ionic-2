import {Component} from "@angular/core";
import { NavController } from 'ionic-angular';
@Component({
    selector:"my-badges",
    templateUrl:"badges.component.html"
})

export class BadgesComponent{
    constructor(public navCtrl:NavController){}
    
    backhome(){
        this.navCtrl.pop();
    }
}