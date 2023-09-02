import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
  }

  openWisdomVideo(id:any) {
    Browser.open({url:'https://www.youtube.com/watch?v='+id})
  }


  videos: any = [
    {
      id: "_oy_5gPxIMw"
    },
    {
      id: "NE7cIYI-lZw"
    },
    {
      id: "v4IQAD7ud0Q"
    },
    {
      id: "BlTS1um4bWE"
    }, {
      id: "AZytqjojumw"
    },
    {
      id: "oFmDSusU_bo"
    },
    {
      id: "qK7Qj7DI-UI"
    },
    {
      id: "Is2nKaoNoBM"
    },
    {
      id: "LWIZJP3Z0iw"
    },
    {
      id: "MOir5HmfJ2c"
    },
    {
      id:"lpFe9VajB1E"
    }

  ];
}
