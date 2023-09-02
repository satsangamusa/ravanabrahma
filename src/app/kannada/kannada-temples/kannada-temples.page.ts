import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
 
import { ActivatedRoute, Router } from '@angular/router';
// import Swiper core and required modules
import { KannadaGlobalService } from '../kannada-global.service';
import { IonicSlides } from '@ionic/angular';
 
@Component({
  selector: 'app-kannada-temples',
  templateUrl: './kannada-temples.page.html',
  styleUrls: ['./kannada-temples.page.scss'],
})
export class KannadaTemplesPage implements OnInit {

  swiperModules=[IonicSlides]
  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, public kannadaGlobal: KannadaGlobalService) {
  }


  ngOnInit() {

  }
  temples: any = [
    {
      img: 'assets/img/temples/1.jpg',
      text: `ಶ್ರೀಲಂಕಾದ ರಾವಣ ಯೆಲ್ಲಾದಲ್ಲಿರುವ ಪ್ರಾಚೀನ ಭಗವಾನ್ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/2.jpg',
      text: `ಆಂಧ್ರಪ್ರದೇಶದ ಮಜ್ಜಿವಲಸದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/3.jpg',
      text: `ಶ್ರೀಲಂಕಾದ ರಾವಣ ಯೆಲ್ಲಾದಲ್ಲಿರುವ ಭಗವಾನ್ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/4.jpg',
      text: `ಆಂಧ್ರಪ್ರದೇಶದ ಮಜ್ಜಿವಲಸದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/5.jpg',
      text: `ಮಧ್ಯಪ್ರದೇಶದ ರಾವಣಗ್ರಾಮದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/6.jpg',
      text: `ಬಾಗಲ್ ಕೋಟ್‌ನ ಐಹೊಳೆಯಲ್ಲಿರುವ ರಾವಣ ಪಹಾಡಿ ಗುಹಾ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/7.jpg',
      text: `ರಾಜಸ್ಥಾನದ ಜೋಧಪುರದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/8.jpg',
      text: `ಆಂಧ್ರಪ್ರದೇಶದ ಕಾಕಿನಾಡದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/9.jpg',
      text: `ಉತ್ತರ ಪ್ರದೇಶದ ಕಾನ್ಪುರದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/10.jpg',
      text: `ಬಿಸ್ರಾಖ್‌ನಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ಮಂದಿರ`
    },
    {
      img: 'assets/img/temples/11.jpg',
      text: `ಹರಿಯಾಣದ ಫರಿದಾಬಾದ್‌ನಲ್ಲಿರುವ ಮಹಾತ್ಮ ರಾವಣ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/12.jpg',
      text: `ಪಂಜಾಬ್‌ನ ಲುಧಿಯಾನದಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
    {
      img: 'assets/img/temples/13.jpg',
      text: `ಮಧ್ಯಪ್ರದೇಶದ  ಮನ್ಡಸೌರ್  ನಲ್ಲಿರುವ ರಾವಣ ಬ್ರಹ್ಮ ದೇವಾಲಯ`
    },
  ]
}
