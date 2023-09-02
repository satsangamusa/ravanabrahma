import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TeluguGlobalService } from '../telugu-global.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id!:number;
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
