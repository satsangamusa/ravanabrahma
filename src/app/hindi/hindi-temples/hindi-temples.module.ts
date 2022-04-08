import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiTemplesPageRoutingModule } from './hindi-temples-routing.module';

import { HindiTemplesPage } from './hindi-temples.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    HindiTemplesPageRoutingModule
  ],
  declarations: [HindiTemplesPage]
})
export class HindiTemplesPageModule {}
