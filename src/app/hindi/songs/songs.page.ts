import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  constructor(protected _sanitizer: DomSanitizer,public youtube:YoutubeVideoPlayer) { }

  ngOnInit() {
  }
  getVideo(value){
    return this._sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/'+value);
  }
  openWisdomVideo(id){
   
    this.youtube.openVideo(id);
  }
   
  videos: any = [
    {
      id: "M089nkvKjYQ"
    },
    {
      id: "W8SkpTd9RDo"
    },
    {
      id: "VM1ZVTFd2gQ"
    },
    {
      id: "l_Tcv6FVkPc"
    },
    {
      id: "A1ZejSMlZgs"
    },
    {
      id: "ZjtFuw2BB50"
    },
     
  ];
}
