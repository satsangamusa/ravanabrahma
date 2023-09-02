import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { TeluguGlobalService } from '../telugu-global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-telugu-books',
  templateUrl: './telugu-books.page.html',
  styleUrls: ['./telugu-books.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeluguBooksPage implements OnInit {
  swiperModules=[IonicSlides];
  constructor(public route:Router,public activatedRoute:ActivatedRoute,public _sanitizer: DomSanitizer,public teluguGlobal:TeluguGlobalService) {
   }
  htmlContent:any=null;
  id!:number;
  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id=params['itemNumber'];
      
    });
    this.htmlContent= await this._sanitizer.bypassSecurityTrustHtml(await this.teluguGlobal.menuContent[this.id].text);
  
  }
  openPdf(link:any){
    Browser.open({url:link});
  }
 async ionViewDidEnter(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.id=params['itemNumber'];
    });
    this.htmlContent= await this._sanitizer.bypassSecurityTrustHtml(await this.teluguGlobal.menuContent[this.id].text);
  }
  

}
