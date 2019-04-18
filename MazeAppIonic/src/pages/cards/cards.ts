import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/louise.jpeg',
          name: 'Louise Corbally'
        },
        date: 'Creator',
        image: 'assets/img/louise.jpeg',
        content: 'Louise is a Digital Media student in GMIT, she comes from Galway city and is currently in her fourth year of college, she has already received a level 7 degree in Business Computing and Digital Media.  ',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Evan Coyne'
        },
        date: 'Creator',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'Evan is a fourth-year student at GMIT. He comes from Ballinlough, Co.Roscommon. He recently received a level 7 degree in Business computing and Digital Media.  '
      },
      {
        user: {
          avatar: 'assets/img/carl.jpeg',
          name: 'Carl Greene'
        },
        date: 'Creator',
        image: 'assets/img/carl.jpeg',
        content: 'Carl is a final year BSc (Honors) Computing and Digital Media student in Galway-Mayo Institute of Technology. He’s from Manorhamilton, Co Leitrim but resides in Galway throughout his college tenure. He has previously completed and graduated from Business Computing and Digital Media, also in GMIT. '
      },
      
    ];

  }
}
