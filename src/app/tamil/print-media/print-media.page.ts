import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-media',
  templateUrl: './print-media.page.html',
  styleUrls: ['./print-media.page.scss'],
})
export class PrintMediaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articles:any=[
    {
      img:`/assets/img/printmedia/tamil/ta1.png`,
      text:`https://kannada.asianetnews.com/festivals/do-you-know-sita-is-daughter-of-ravana-in-ramayana-q9p4d1`
    } 
  ]
}
