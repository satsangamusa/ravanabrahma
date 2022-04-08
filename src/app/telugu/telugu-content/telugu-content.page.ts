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
  selector: 'app-telugu-content',
  templateUrl: './telugu-content.page.html',
  styleUrls: ['./telugu-content.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeluguContentPage implements OnInit {

  constructor(public route:Router,public activatedRoute:ActivatedRoute,public _sanitizer: DomSanitizer,public teluguGlobal:TeluguGlobalService) {
   }
  htmlContent:any=null;
  id:number;
  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id=params['itemNumber'];
      
    });
    this.htmlContent= await this._sanitizer.bypassSecurityTrustHtml(await this.teluguGlobal.menuContent[this.id].text);
  
  }
 async ionViewDidEnter(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.id=params['itemNumber'];
    });
    this.htmlContent= await this._sanitizer.bypassSecurityTrustHtml(await this.teluguGlobal.menuContent[this.id].text);
  }
  

}
