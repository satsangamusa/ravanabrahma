import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HindiGlobalService } from '../hindi-global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hindi-aims',
  templateUrl: './hindi-aims.page.html',
  styleUrls: ['./hindi-aims.page.scss'],
})
export class HindiAimsPage implements OnInit {
  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, public hindiGlobal: HindiGlobalService) { }
  htmlContent: any = null;
  id!: number;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['itemNumber'];
    });
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(this.hindiGlobal.menuContent[this.id].text);
  }
  ionViewDidEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['itemNumber'];
    });
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(this.hindiGlobal.menuContent[this.id].text);
  }

}
