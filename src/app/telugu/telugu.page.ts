import { Component, OnInit } from '@angular/core';
import { TeluguGlobalService } from './telugu-global.service';
import { IonicSlides, MenuController } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.page.html',
  styleUrls: ['./telugu.page.scss'],
})
export class TeluguPage implements OnInit {
  swiperModules = [IonicSlides];
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  value: any = 1;
  constructor(public teluguGlobal: TeluguGlobalService,public menuCtrl:MenuController, 
    public global:GlobalService) {
      this.global.menuType="telugu";
      this.global.home="నిలయం";
      this.global.language="భాషను మార్చండి"
      this.global.menu=this.teluguGlobal.menu;
     }

  ngOnInit() {
    this.global.menuType="telugu";
    this.global.home="నిలయం";
    this.global.language="భాషను మార్చండి"
    this.global.menu=this.teluguGlobal.menu;
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.global.menuType="telugu";
    this.global.home="నిలయం";
    this.global.language="భాషను మార్చండి"
    this.global.menu=this.teluguGlobal.menu;
  }
  
  data: any = [
    'assets/img/slides/1.png',
    'assets/img/slides/2.png',
    'assets/img/slides/3.png',
  ];
}
