import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
 
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

import { EnglishGlobalService } from '../english-global.service';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);
@Component({
  selector: 'app-english-temples',
  templateUrl: './english-temples.page.html',
  styleUrls: ['./english-temples.page.scss'],
})
export class EnglishTemplesPage implements OnInit {

 
  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, public englishGlobal: EnglishGlobalService) {
  }


  ngOnInit() {

  }
  temples: any = [
    {
      img: 'assets/img/temples/1.jpg',
      text: `The ancient Bhagavan Ravana Brahma Temple in Srilanka at Ravana Yella`
    },
    {
      img: 'assets/img/temples/2.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Andhra Pradesh at Majjivalasa`
    },
    {
      img: 'assets/img/temples/3.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Srilanka at Ravana Yella`
    },
    {
      img: 'assets/img/temples/4.jpg',
      text: `The Bhagavan Ravana Brahma Temple in  Andhra Pradesh at Majjivalasa`
    },
    {
      img: 'assets/img/temples/5.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Madhyapradesh at Ravanagram`
    },
    {
      img: 'assets/img/temples/6.jpg',
      text: `The Ravan Mountain Cave Temple in Karnataka in Bagalkot at Ayihol`
    },
    {
      img: 'assets/img/temples/7.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Rajasthan at Jodhpur`
    },
    {
      img: 'assets/img/temples/8.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Andhra Pradesh at Kakinada`
    },
    {
      img: 'assets/img/temples/9.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Uttarapradesh at Kanpur`
    },
    {
      img: 'assets/img/temples/10.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Uttarapradesh at Bisrakh`
    },
    {
      img: 'assets/img/temples/11.jpg',
      text: `The Mahatma Ravana Temple in Haryana at Faridabad`
    },
    {
      img: 'assets/img/temples/12.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Punjab at Ludhiyana`
    },
    {
      img: 'assets/img/temples/13.jpg',
      text: `The Bhagavan Ravana Brahma Temple in Madhya Pradesh at Mandsaur `
    },
  ]
}
