import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiBooksPageRoutingModule } from './hindi-books-routing.module';

import { HindiBooksPage } from './hindi-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HindiBooksPageRoutingModule
  ],
  declarations: [HindiBooksPage]
})
export class HindiBooksPageModule {}
