import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-creators',
  templateUrl: 'creators.html'
})
export class CreatorsPage {
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
        review: "This group project allowed me to develop multiple skills in both Unity and Ionic. Having spent the last college year focused on this project it has made me realise how important collaboration is in projects. I definitely found this project to be challenging as creativity is not my strong point, so while my team members made assets & levels for the game, I focused more on the website & building the leaderboard API. This in itself was a challenge and not something I had done before. I never made a website using Ionic so it was a learning experience and I had to learn Python from scratch to build out the API. Another issue that I was continuously met with during this project was that my computer was unable to run Unity, it would crash each time it opened which made working impossible. Looking back on it this project isn’t something I would have chosen to do had I know how much creativity it required, however I am glad that we did go ahead with it as it was definitely a learning curve for me. It also encouraged me to start using Github for all my work as I made a point of committing the code to Github after I made any changes. I created branches on Github for each team member so they could make changes to the code if necessary. This project has thought me a lot about 3D modelling and game development, however I don’t think it will be something that I will continue to pursue.",
      },
      {
        user: {
          avatar: 'assets/img/evan.jpeg',
          name: 'Evan Coyne'
        },
        date: 'Creator',
        image: 'assets/img/evan.jpeg',
        content: 'Evan is a fourth-year student at GMIT. He comes from Ballinlough, Co.Roscommon. He recently received a level 7 degree in Business computing and Digital Media.  ',
        review: "This project was without doubt the most stressful and frustrating module I have undertaken in my four years in college. It would be dishonest of me to say I enjoyed it or would do it all over again without hesitation. I can however say I am satisfied with both the quality and quantity of work I completed, and I allocated significant time and appropriate attention to the project throughout the year. I also ensured that I had new work completed for the project every week. I am aware that it’s possible to achieve impressive results quickly by using professionally made assets and animations available online, but without proper reference this is highly unethical in the context of the module and does nothing for the learning process. Therefore, I instead chose to persevere with producing my own work even though progress was extremely slow and tedious at times.I often found that many days spent trying to perfect animations or create assets, did not produce the desired results and made me question if the time invested was worth the effort when shortcuts were available.However, on the positive side, I did benefit from the learning process and gained an appreciation for the skill and dedication required for 3D modelling, animation, and game development.All the assets, animations, documentation, video and logo I produced are absolutely original, and I’m very proud of that.I am hugely relieved to be finally submitting the finished project",

      },
      {
        user: {
          avatar: 'assets/img/carl.jpeg',
          name: 'Carl Greene'
        },
        date: 'Creator',
        image: 'assets/img/carl.jpeg',
        content: 'Carl is a final year BSc (Honors) Computing and Digital Media student in Galway-Mayo Institute of Technology. He’s from Manorhamilton, Co Leitrim but resides in Galway throughout his college tenure. He has previously completed and graduated from Business Computing and Digital Media, also in GMIT. ',
        review: "I enjoyed this group project and I feel my skills in Unity developed tremendously throughout the course of this assignment. We explored a good portion of what Unity has to offer. I learned a lot about teamwork and collaboration. I also learned a lot from my group members seeing them work through things I never fully grasped in the modules in Unity and Blender last semester. An example of this would be looping animations in blender and texturing 3D models. I also found the version control tool within Unity has helped me understand why tools like GitHub are so important in software. The portion of the project I did not enjoy was how slow progress was. My laptop wasn’t powerful enough to work on the project from home and the lab computers were rarely available so while it’s easy to brainstorm ideas in the Monday class some weeks we worked hard and had barely anything to show for it. Most of the 3D models I created in Blender in the first half of the project did not import into Unity correctly. For example, the photo realistic trees I created. I’m happy with the work we have submitted but I would not make a game again if I had to redo this project.",
      },

    ];

  }
}
