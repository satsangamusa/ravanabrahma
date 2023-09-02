import { Component, OnInit } from '@angular/core';
import { DomSanitizer,} from '@angular/platform-browser';
import { TamilGlobalService } from '../tamil-global.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-tamil-aims',
  templateUrl: './tamil-aims.page.html',
  styleUrls: ['./tamil-aims.page.scss'],
})
export class TamilAimsPage implements OnInit {
  constructor(public route:Router,public activatedRoute:ActivatedRoute,public _sanitizer: DomSanitizer,public tamilGlobal:TamilGlobalService) {
  }
 htmlContent:any=null;
 id!:number;
 async ngOnInit() {
   this.activatedRoute.queryParams.subscribe(params => {
     this.id=params['itemNumber'];
     
   });
   this.htmlContent= await this._sanitizer.bypassSecurityTrustHtml(await this.tamilGlobal.menuContent[this.id].text);
 
 }
async ionViewDidEnter(){
   this.activatedRoute.queryParams.subscribe(params => {
     this.id=params['itemNumber'];
   });
   this.htmlContent= await this._sanitizer.bypassSecurityTrustHtml(await this.tamilGlobal.menuContent[this.id].text);
 }
 

}
