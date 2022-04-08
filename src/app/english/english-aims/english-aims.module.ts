import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishAimsPageRoutingModule } from './english-aims-routing.module';

import { EnglishAimsPage } from './english-aims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishAimsPageRoutingModule
  ],
  declarations: [EnglishAimsPage]
})
export class EnglishAimsPageModule {}
