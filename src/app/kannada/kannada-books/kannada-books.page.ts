import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { KannadaGlobalService } from '../kannada-global.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-kannada-books',
  templateUrl: './kannada-books.page.html',
  styleUrls: ['./kannada-books.page.scss'],
})
export class KannadaBooksPage implements OnInit {


  constructor(public route: Router, public activatedRoute: ActivatedRoute, public _sanitizer: DomSanitizer, public kannadaGlobal: KannadaGlobalService) { }
  htmlContent: any = null;
  id!: number;
  openPdf(link:any){
    Browser.open({url:link});
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['itemNumber'];
    });
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(this.kannadaGlobal.menuContent[this.id].text);
  }
  ionViewDidEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['itemNumber'];
    });
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(this.kannadaGlobal.menuContent[this.id].text);
  }
}