import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { TeluguGlobalService } from '../telugu-global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: 'app-telugu-temples',
  templateUrl: './telugu-temples.page.html',
  styleUrls: ['./telugu-temples.page.scss'],
})
export class TeluguTemplesPage implements OnInit {

  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, public teluguGlobal: TeluguGlobalService) {
  }


  ngOnInit() {

  }
  temples: any = [
    {
      img: 'assets/img/temples/1.jpg',
      text: `శ్రీలంకలోని రావణ యెల్ల లో ఉన్న పురాతన భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/2.jpg',
      text: `ఆంధ్రప్రదేశ్ లోని మజ్జివలసలో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/3.jpg',
      text: `శ్రీలంకలోని రావణ యెల్ల లో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/4.jpg',
      text: `ఆంధ్రప్రదేశ్ లోని మజ్జివలసలో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/5.jpg',
      text: `మధ్యప్రదేశ్ లోని రావణగ్రం లో భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/6.jpg',
      text: `బాగల్ కోట్ లోని అయిహోల్ లో రావణ్ పహాడి గుహ దేవాలయము`
    },
    {
      img: 'assets/img/temples/7.jpg',
      text: `రాజస్థాన్ లోని జోధ్ పూర్ లో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/8.jpg',
      text: `ఆంధ్రప్రదేశ్ లోని కాకినాడలో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/9.jpg',
      text: `ఉత్తర ప్రదేశ్ లోని కాన్పూర్ లో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/10.jpg',
      text: `బిస్రాఖ్ లో భగవాన్ రావణ బ్రహ్మ మందిరం`
    },
    {
      img: 'assets/img/temples/11.jpg',
      text: `హర్యానా లోని ఫరీదాబాద్ లోగల మహాత్మా రావణ మందిరము`
    },
    {
      img: 'assets/img/temples/12.jpg',
      text: `పంజాబ్ లోని లూధియానాలో గల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
    {
      img: 'assets/img/temples/13.jpg',
      text: `మధ్యప్రదేశ్ లోని మండ్సౌర్ లోగల భగవాన్ రావణ బ్రహ్మ దేవాలయము`
    },
  ]
}
