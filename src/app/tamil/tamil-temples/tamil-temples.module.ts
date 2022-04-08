import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamilTemplesPageRoutingModule } from './tamil-temples-routing.module';

import { TamilTemplesPage } from './tamil-temples.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    TamilTemplesPageRoutingModule
  ],
  declarations: [TamilTemplesPage]
})
export class TamilTemplesPageModule {}
