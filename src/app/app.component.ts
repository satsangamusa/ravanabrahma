import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';
import { NetworkService, ConnectionStatus } from 'src/app/network.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  sh: any = 0;
  sm: any = 0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public global: GlobalService,
    public router: Router,
    private networkService: NetworkService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Online) {
          this.global.networkStatus = "ONLINE";
          //this.offlineManager.checkForEvents().subscribe();
          //this.offlineManager.checkForEvents();
        } else {
          this.global.networkStatus = "OFFLINE";
        }
      });

    });
  }

  ngOnInit() {
    this.global.mainItem = -1;
    //this.router.navigateByUrl("lg");

  }
 
}
