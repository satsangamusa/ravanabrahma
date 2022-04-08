import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishContentPageRoutingModule } from './english-content-routing.module';

import { EnglishContentPage } from './english-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishContentPageRoutingModule
  ],
  declarations: [EnglishContentPage]
})
export class EnglishContentPageModule {}
