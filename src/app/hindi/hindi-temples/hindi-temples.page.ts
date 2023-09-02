import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
 
import { ActivatedRoute, Router } from '@angular/router';

import { HindiGlobalService } from '../hindi-global.service';
import { IonicSlides } from '@ionic/angular';
 
@Component({
  selector: 'app-hindi-temples',
  templateUrl: './hindi-temples.page.html',
  styleUrls: ['./hindi-temples.page.scss'],
})
export class HindiTemplesPage implements OnInit {
  swiperModules=[IonicSlides]
 
  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, public hindiGlobal: HindiGlobalService) {
  }


  ngOnInit() {

  }
  temples: any = [
    
    {
      img: 'assets/img/temples/1.jpg',
      text: `श्रीलंका के रावण एल्ला में भगवान रावण ब्रह्मा का प्राचीन देवालय है।`
    },
    {
      img: 'assets/img/temples/2.jpg',
      text: `आंध्र प्रदेश के मज्जीवलसा में भगवान रावण ब्रह्मा का देवालय स्थित है।`
    },
    {
      img: 'assets/img/temples/3.jpg',
      text: `श्रीलंका के रावण एल्ला में भगवान रावण ब्रह्मा का प्राचीन देवालय है।`
    },
    {
      img: 'assets/img/temples/4.jpg',
      text: `आंध्र प्रदेश के मज्जीवलसा में भगवान रावण ब्रह्मा का देवालय स्थित है।`
    },
    {
      img: 'assets/img/temples/5.jpg',
      text: `मध्य प्रदेश के रावण गांव में भगवान रावण ब्रह्मा का देवालय है।`
    },
    {
      img: 'assets/img/temples/6.jpg',
      text: `बागलकोट के ऐहोल गांव में भगवान रावण ब्रह्मा पहाड़ी गुफा है।`
    },
    {
      img: 'assets/img/temples/7.jpg',
      text: `राजस्थान के जोधपुर में भगवान रावण ब्रह्मा का देवालय स्थित है।`
    },
    {
      img: 'assets/img/temples/8.jpg',
      text: `आंध्र प्रदेश के काकीनाडा में भगवान रावण ब्रह्मा का देवालय है।`
    },
    {
      img: 'assets/img/temples/9.jpg',
      text: `उत्तर प्रदेश के कानपुर में भगवान रावण ब्रह्मा का देवालय है।`
    },
    {
      img: 'assets/img/temples/10.jpg',
      text: `बिसराख में भगवान रावण ब्रह्मा मंदिर है।`
    },
    {
      img: 'assets/img/temples/11.jpg',
      text: `हरियाणा के फरीदाबाद में महात्मा रावण मंदिर  है।`
    },
    {
      img: 'assets/img/temples/12.jpg',
      text: `पंजाब के लुधियाना में भगवान रावण ब्रह्मा का देवालय है।`
    },
    {
      img: 'assets/img/temples/13.jpg',
      text: `मध्य प्रदेश के मंदसौर में भगवान रावण ब्रह्मा का देवालय है।`
    },
  ]
}
