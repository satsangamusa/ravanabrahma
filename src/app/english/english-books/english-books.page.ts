import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EnglishGlobalService } from '../english-global.service';

@Component({
  selector: 'app-english-books',
  templateUrl: './english-books.page.html',
  styleUrls: ['./english-books.page.scss'],
})
export class EnglishBooksPage implements OnInit {

  constructor(public route: Router, public activatedRoute: ActivatedRoute,public _sanitizer: DomSanitizer,public englishGlobal:EnglishGlobalService) { 
    
  }
  id: number;
  htmlContent:any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['itemNumber'];
    });
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(this.englishGlobal.menuContent[this.id].text);
  }
  ionViewDidEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['itemNumber'];
    });
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(this.englishGlobal.menuContent[this.id].text);
  }

}
