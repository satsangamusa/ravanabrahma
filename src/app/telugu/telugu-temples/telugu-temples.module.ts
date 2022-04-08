import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeluguTemplesPageRoutingModule } from './telugu-temples-routing.module';

import { TeluguTemplesPage } from './telugu-temples.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    TeluguTemplesPageRoutingModule
  ],
  declarations: [TeluguTemplesPage]
})
export class TeluguTemplesPageModule {}
