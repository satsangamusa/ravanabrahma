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
      img:`/assets/img/printmedia/kannada/ka1.png`,
      text:`https://kannada.asianetnews.com/festivals/do-you-know-sita-is-daughter-of-ravana-in-ramayana-q9p4d1`
    },
    {
      img:`/assets/img/printmedia/kannada/ka2.png`,
      text:`https://vijaykarnataka.com/religion/temples/places-in-india-where-ravana-is-worshipped-not-burnt/articleshow/78947142.cms`
    },
    {
      img:`/assets/img/printmedia/kannada/ka3.png`,
      text:`https://www.kannadaprabha.com/nation/2020/oct/25/sangola-a-maha-village-where-ravan-is-honoured-not-condemned-431171.html`
    },
    {
      img:`/assets/img/printmedia/kannada/ka4.png`,
      text:`https://kannada.oneindia.com/features/worship-ravana-during-vijayadashami-special-ceremony-at-mathura-temple-237134.html`
    }
  ]
}
