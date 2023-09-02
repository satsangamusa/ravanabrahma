import { Component, OnInit } from '@angular/core';
import { TamilGlobalService } from './tamil-global.service';
import { MenuController, IonicSlides } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.page.html',
  styleUrls: ['./tamil.page.scss'],
})
export class TamilPage implements OnInit {
  swiperModules=[IonicSlides]
  slideOptions = {
    initialSlide: 1,
    speed: 200,
  };
  value: any = 1;
  constructor(public tamilGlobal: TamilGlobalService,public menuCtrl:MenuController,
    public global:GlobalService) { 
      this.global.menu=this.tamilGlobal.menu;
      this.global.menuType="tamil";
      this.global.language="மொழியை மாற்றவும்"
      this.global.home="முகப்பு பக்கம்";
    }

  ngOnInit() {
    this.global.menu=this.tamilGlobal.menu;
    this.global.menuType="tamil";
    this.global.language="மொழியை மாற்றவும்"
    this.global.home="முகப்பு பக்கம்";
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.global.menuType="tamil";
    this.global.home="முகப்பு பக்கம்";
    this.global.language="மொழியை மாற்றவும்"
    this.global.menu=this.tamilGlobal.menu;
  }
   
  data: any = [
    'assets/img/tamil/slides/1.png',
    'assets/img/tamil/slides/2.png',
    'assets/img/slides/3.png',
  ];
}
