import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamilAimsPageRoutingModule } from './tamil-aims-routing.module';

import { TamilAimsPage } from './tamil-aims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamilAimsPageRoutingModule
  ],
  declarations: [TamilAimsPage]
})
export class TamilAimsPageModule {}
