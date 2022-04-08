import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishTemplesPageRoutingModule } from './english-temples-routing.module';

import { EnglishTemplesPage } from './english-temples.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    EnglishTemplesPageRoutingModule
  ],
  declarations: [EnglishTemplesPage]
})
export class EnglishTemplesPageModule {}
