import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';
import { Tab1Root, Tab2Root, Tab3Root } from '../';

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})
export class CharactersPage {
  item: any;
  level: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.level = "levelone";
  }

}
