import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(protected _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  
  openWisdomVideo(id:any) {
    Browser.open({url:'https://www.youtube.com/watch?v='+id})
  }

   

  videos: any = [
    {
      id: "KlHGyale4cs"
    },
    {
      id: "N2Y0wvuTKmI"
    },
    {
      id: "UdImEVsMUmg"
    },
    {
      id: "yclNAdxBy0Y"
    },
    {
      id: "eBcI67g1-_M"
    },
    {
      id: "cB6FpDOPJd0"
    },
  ];
}