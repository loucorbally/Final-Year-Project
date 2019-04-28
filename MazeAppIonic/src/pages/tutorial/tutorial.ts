import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Slides } from 'ionic-angular';
import { HttpClient, HttpClientModule,  } from '@angular/common/http';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  @ViewChild(Slides) allSlides: Slides;
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
  scores: any;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform, public http: HttpClient) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/maze.png',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/maze.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-3.png',
            
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('LevelsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);

    this.getHighScores();
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  slideToNext() {
    // If slide is not at end 
    if (!this.allSlides.isEnd()) {
      this.allSlides.slideNext();
    }

  }

  slideToPrev() {
    // If slide is not at beginning
    if(!this.allSlides.isBeginning()){
      this.allSlides.slidePrev();
    }

  }
  getHighScores(){
    this.http.get('http://34.74.7.23:2025/leaderboard/').subscribe((res: string)=>{
      console.log(res);
      console.log(typeof res)

      JSON.parse(res);
      this.scores=JSON.parse(res);
 
    });
  }

}
