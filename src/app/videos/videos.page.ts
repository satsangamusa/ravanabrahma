import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(public global: GlobalService, public youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  openWisdomVideo(id) {

    this.youtube.openVideo(id);
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
