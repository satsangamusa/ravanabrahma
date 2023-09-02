import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeluguBooksPageRoutingModule } from './telugu-books-routing.module';

import { TeluguBooksPage } from './telugu-books.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeluguBooksPageRoutingModule
  ],
  declarations: [TeluguBooksPage]
})
export class TeluguBooksPageModule {}
