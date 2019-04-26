import { Component } from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-controls',
  templateUrl: 'controls.html'
})
export class ControlsPage {
  cardItems: any[];



constructor(public navCtrl: NavController) {

}
}


