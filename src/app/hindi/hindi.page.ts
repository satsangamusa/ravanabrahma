import { Component, OnInit } from '@angular/core';
import { HindiGlobalService } from './hindi-global.service';
import { MenuController, IonSlides } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.page.html',
  styleUrls: ['./hindi.page.scss'],
})
export class HindiPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 200,
  };
  value: any = 1;
  constructor(public hindiGlobal: HindiGlobalService,public menuCtrl:MenuController,
    public global:GlobalService) {
      this.global.menu=this.hindiGlobal.menu;
      this.global.menuType="hindi";
      this.global.language="भाषा बदलें";
      this.global.home="गृह";
     }

  ngOnInit() {
    this.global.menu=this.hindiGlobal.menu;
    this.global.menuType="hindi";
    this.global.language="भाषा बदलें";
    this.global.home="गृह";
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.global.menuType="hindi";
    this.global.language="भाषा बदलें";
    this.global.menu=this.hindiGlobal.menu;
    this.global.home="गृह";
    
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  data: any = [
    'assets/img/hindi/slides/1.png',
    'assets/img/hindi/slides/2.png',
    'assets/img/slides/3.png',
  ];
}
