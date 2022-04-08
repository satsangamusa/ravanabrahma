import { Component, OnInit } from '@angular/core';
import { EnglishGlobalService } from '../english/english-global.service';
import { MenuController, IonSlides } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 200,
  };
  value: any = 1;
  constructor(public englishGlobal: EnglishGlobalService,public menuCtrl:MenuController,
    public global:GlobalService) {
      this.global.menu=this.englishGlobal.menu;
      this.global.menuType="english";
      this.global.language="Change Language";
      this.global.home="Home";
     }

  ngOnInit() {
    this.global.menu=this.englishGlobal.menu;
    this.global.menuType="english";
    this.global.language="Change Language";
    this.global.home="Home";
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.global.menuType="english";
    this.global.language="Change Language";
    this.global.home="Home";
    this.global.menu=this.englishGlobal.menu;

  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  data: any = [
    'assets/img/english/slides/1.png',
    'assets/img/english/slides/2.png',
    'assets/img/slides/3.png',
  ];
}
