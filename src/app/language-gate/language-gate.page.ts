import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-gate',
  templateUrl: './language-gate.page.html',
  styleUrls: ['./language-gate.page.scss'],
})
export class LanguageGatePage implements OnInit {

  constructor(public menuCtrl:MenuController, public router:Router) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  selectLanguage(language){
    console.log(' The selected language', language);
    this.router.navigateByUrl(language);
  }

}
