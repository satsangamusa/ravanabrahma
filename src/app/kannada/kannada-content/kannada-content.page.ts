import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { KannadaGlobalService } from '../kannada-global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kannada-content',
  templateUrl: './kannada-content.page.html',
  styleUrls: ['./kannada-content.page.scss'],
})
export class KannadaContentPage implements OnInit {

 
  constructor(public route:Router,public activatedRoute:ActivatedRoute,public _sanitizer: DomSanitizer,public kannadaGlobal:KannadaGlobalService) { }
 htmlContent:any=null;
 id:number;
 ngOnInit() {
   this.activatedRoute.queryParams.subscribe(params => {
     this.id=params['itemNumber'];
   });
   this.htmlContent= this._sanitizer.bypassSecurityTrustHtml(this.kannadaGlobal.menuContent[this.id].text);
 }
 ionViewDidEnter(){
   this.activatedRoute.queryParams.subscribe(params => {
     this.id=params['itemNumber'];
   });
   this.htmlContent= this._sanitizer.bypassSecurityTrustHtml(this.kannadaGlobal.menuContent[this.id].text);
 }

}
