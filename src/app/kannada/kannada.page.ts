import { Component, OnInit } from '@angular/core';
import { KannadaGlobalService } from './kannada-global.service';
import { IonicSlides, MenuController } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-kannada',
  templateUrl: './kannada.page.html',
  styleUrls: ['./kannada.page.scss'],
})
export class KannadaPage implements OnInit {
  swiperModules=[IonicSlides]
  slideOptions = {
    initialSlide: 1,
    speed: 200,
  };
  value: any = 1;
  constructor(public kannadaGlobal: KannadaGlobalService,public menuCtrl:MenuController,
    public global:GlobalService) {
      this.global.menu=this.kannadaGlobal.menu;
      this.global.home="ಮನೆ";
      this.global.language="ಭಾಷೆ ಬದಲಿಸಿ";
      this.global.menuType="kannada";
     }

  ngOnInit() {
    this.global.menu=this.kannadaGlobal.menu;
    this.global.menuType="kannada";
    this.global.language="ಭಾಷೆ ಬದಲಿಸಿ";
    this.global.home="ಮನೆ";
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.global.menuType="kannada";
    this.global.language="ಭಾಷೆ ಬದಲಿಸಿ";
    this.global.home="ಮನೆ";
    this.global.menu=this.kannadaGlobal.menu;

  }
  
  data: any = [
    'assets/img/kannada/slides/1.png',
    'assets/img/kannada/slides/2.png',
    'assets/img/slides/3.png',
  ];
}
