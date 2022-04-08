import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KannadaTemplesPageRoutingModule } from './kannada-temples-routing.module';

import { KannadaTemplesPage } from './kannada-temples.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    KannadaTemplesPageRoutingModule
  ],
  declarations: [KannadaTemplesPage]
})
export class KannadaTemplesPageModule {}
