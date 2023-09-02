import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TeluguGlobalService } from '../telugu-global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-telugu-aims',
  templateUrl: './telugu-aims.page.html',
  styleUrls: ['./telugu-aims.page.scss'],
})
export class TeluguAimsPage implements OnInit {
  swiperModules=[IonicSlides]
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
