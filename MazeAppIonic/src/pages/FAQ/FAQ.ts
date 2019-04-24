import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, Platform } from 'ionic-angular';

interface PageFAQ {
  title: string
  component: any
}
type PageList = PageFAQ[]

@IonicPage()
@Component({
  selector: 'page-FAQ',
  templateUrl: 'FAQ.html'
})
export class FAQPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;
  level: string = "levelone";
  isAndroid: boolean = false;

  rootPage: any = 'ContentPage';

  pages: PageList;

  constructor(public navCtrl: NavController, platform: Platform) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign in', component: 'LoginPage' },
      { title: 'Signup', component: 'SignupPage' },
      ];
      { this.isAndroid = platform.is('android');
    }
  }

  

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  openPage(page: PageFAQ) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
