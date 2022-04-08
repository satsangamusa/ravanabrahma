import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishBooksPageRoutingModule } from './english-books-routing.module';

import { EnglishBooksPage } from './english-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishBooksPageRoutingModule
  ],
  declarations: [EnglishBooksPage]
})
export class EnglishBooksPageModule {}
