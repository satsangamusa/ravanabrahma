import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiAimsPageRoutingModule } from './hindi-aims-routing.module';

import { HindiAimsPage } from './hindi-aims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HindiAimsPageRoutingModule
  ],
  declarations: [HindiAimsPage]
})
export class HindiAimsPageModule {}
