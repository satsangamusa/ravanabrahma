import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeluguBooksPageRoutingModule } from './telugu-books-routing.module';

import { TeluguBooksPage } from './telugu-books.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    TeluguBooksPageRoutingModule
  ],
  declarations: [TeluguBooksPage]
})
export class TeluguBooksPageModule {}
