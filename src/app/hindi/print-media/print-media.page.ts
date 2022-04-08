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
      img:`/assets/img/printmedia/hindi/1.png`,
      text:`https://www.jagran.com/uttar-pradesh/lucknow-city-vijayadashmi-public-worship-ravana-in-many-districts-of-up-never-burn-effigy-of-ravana-on-dussehra-hpjagran-special-22114890.html`
    },
    {
      img:`/assets/img/printmedia/hindi/2.png`,
      text:`https://zeenews.india.com/hindi/india/up-uttarakhand/uttar-pradesh/unique-ravan-temple-in-kanpur-uttar-pradesh-people-worship-here-temple-opens-only-once-in-a-year-pcup/1007498`
    }  
  ]
}
