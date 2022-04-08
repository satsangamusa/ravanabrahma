import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamilBooksPageRoutingModule } from './tamil-books-routing.module';

import { TamilBooksPage } from './tamil-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamilBooksPageRoutingModule
  ],
  declarations: [TamilBooksPage]
})
export class TamilBooksPageModule {}
