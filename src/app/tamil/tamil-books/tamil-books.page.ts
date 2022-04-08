import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TamilGlobalService } from '../tamil-global.service';

@Component({
  selector: 'app-tamil-books',
  templateUrl: './tamil-books.page.html',
  styleUrls: ['./tamil-books.page.scss'],
})
export class TamilBooksPage implements OnInit {
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
