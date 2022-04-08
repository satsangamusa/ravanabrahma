import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TamilGlobalService } from '../tamil-global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tamil-content',
  templateUrl: './tamil-content.page.html',
  styleUrls: ['./tamil-content.page.scss'],
})
export class TamilContentPage implements OnInit {
  constructor(public route:Router,public activatedRoute:ActivatedRoute,public _sanitizer: DomSanitizer,public tamilGlobal:TamilGlobalService) {
  }
 htmlContent:any=null;
 id:number;
 ngOnInit() {
   this.activatedRoute.queryParams.subscribe(params => {
     this.id=params['itemNumber'];
   });
   this.htmlContent= this._sanitizer.bypassSecurityTrustHtml(this.tamilGlobal.menuContent[this.id].text);
 }
 ionViewDidEnter(){
   this.activatedRoute.queryParams.subscribe(params => {
     this.id=params['itemNumber'];
   });
   this.htmlContent= this._sanitizer.bypassSecurityTrustHtml(this.tamilGlobal.menuContent[this.id].text);
 }

}
