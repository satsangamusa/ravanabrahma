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
      img:`/assets/img/printmedia/english/eng1.png`,
      text:`https://www.news18.com/news/world/sri-lanka-says-enough-facts-prove-ravana-used-aircraft-to-fly-asks-people-to-help-with-in-depth-research-2723371.html`
    },
    {
      img:`/assets/img/printmedia/english/eng2.png`,
      text:`https://www.forwardpress.in/2018/10/tathagat-ravan-in-bahujan-shraman-tradition/`
    },
    {
      img:`/assets/img/printmedia/english/eng3.png`,
      text:`https://timesofindia.indiatimes.com/city/bhopal/betul-tribals-protest-against-ravana-effigy-burning/articleshow/60888502.cms`
    }

    
  ]
}
