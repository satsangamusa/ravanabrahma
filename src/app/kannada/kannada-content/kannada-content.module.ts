import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KannadaContentPageRoutingModule } from './kannada-content-routing.module';

import { KannadaContentPage } from './kannada-content.page';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KannadaContentPageRoutingModule
  ],
  declarations: [KannadaContentPage]
})
export class KannadaContentPageModule {}
