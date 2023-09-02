import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EnglishGlobalService } from '../english-global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-english-aims',
  templateUrl: './english-aims.page.html',
  styleUrls: ['./english-aims.page.scss'],
})
export class EnglishAimsPage implements OnInit {

  constructor(public route: Router, public activatedRoute: ActivatedRoute,public _sanitizer: DomSanitizer,public englishGlobal:EnglishGlobalService) { 
    
  }
  id!: number;
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
