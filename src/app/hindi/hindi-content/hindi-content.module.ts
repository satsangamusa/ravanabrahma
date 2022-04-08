import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiContentPageRoutingModule } from './hindi-content-routing.module';

import { HindiContentPage } from './hindi-content.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    HindiContentPageRoutingModule
  ],
  declarations: [HindiContentPage]
})
export class HindiContentPageModule {}
