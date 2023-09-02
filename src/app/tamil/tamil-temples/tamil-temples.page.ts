import { Component, OnInit } from '@angular/core';
import { DomSanitizer, } from '@angular/platform-browser';
 
import { ActivatedRoute, Router } from '@angular/router';
 

import { TamilGlobalService } from '../tamil-global.service';
import { IonicSlides } from '@ionic/angular';
 

@Component({
  selector: 'app-tamil-temples',
  templateUrl: './tamil-temples.page.html',
  styleUrls: ['./tamil-temples.page.scss'],
})
export class TamilTemplesPage implements OnInit {

  swiperModules = [IonicSlides];

  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, 
    public tamilGlobal: TamilGlobalService) {
  }


  ngOnInit() {

  }
  temples: any = [
    {
      img: 'assets/img/temples/1.jpg',
      text: `ஸ்ரீலங்காவில் ராவண எல்லையில் பழமையான கட்டடம் ராவணப்பிரம்மா தேவாலயம்.`
    },
    {
      img: 'assets/img/temples/2.jpg',
      text: `ஆந்திராவில் மஜ்ஜிவலசயில் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/3.jpg',
      text: `ஸ்ரீலங்காவில் ராவண எல்லையில் பழமையான கட்டடம் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/4.jpg',
      text: `ஆந்திராவில் மஜ்ஜிவலசயில் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/5.jpg',
      text: ` மத்திய பிரதேசத்தில் ராவணங்கிரம் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/6.jpg',
      text: `பாகல் கோட்டில் ஆயில்ஹோல் ராவண பகாடி குகை தேவாலயம்`
    },
    {
      img: 'assets/img/temples/7.jpg',
      text: ` ராஜஸ்தானில் ஜோத்பூரில் பகவான் ராவணப்பிரம்ம தேவாலயம்`
    },
    {
      img: 'assets/img/temples/8.jpg',
      text: `ஆந்திரா காக்கிநாடாவில் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/9.jpg',
      text: ` உத்தரபிரதேசத்தில் கான்பூரில் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/10.jpg',
      text: `பீஸ்ராக்கில் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/11.jpg',
      text: ` ஹரியானாவில் பரிதாபாத்யில் மகாத்மா ராவணன் தேவாலயம்`
    },
    {
      img: 'assets/img/temples/12.jpg',
      text: `பஞ்சாப் லூதியானாவில் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
    {
      img: 'assets/img/temples/13.jpg',
      text: `மத்திய பிரதேசில் மண்டோசர் பகவான் ராவணப்பிரம்மா தேவாலயம்`
    },
  ]
}
