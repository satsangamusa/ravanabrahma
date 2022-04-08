import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KannadaAimsPageRoutingModule } from './kannada-aims-routing.module';

import { KannadaAimsPage } from './kannada-aims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KannadaAimsPageRoutingModule
  ],
  declarations: [KannadaAimsPage]
})
export class KannadaAimsPageModule {}
