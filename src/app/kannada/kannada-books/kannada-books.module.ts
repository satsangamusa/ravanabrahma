import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KannadaBooksPageRoutingModule } from './kannada-books-routing.module';

import { KannadaBooksPage } from './kannada-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KannadaBooksPageRoutingModule
  ],
  declarations: [KannadaBooksPage]
})
export class KannadaBooksPageModule {}
