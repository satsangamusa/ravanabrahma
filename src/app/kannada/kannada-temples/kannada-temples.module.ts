import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KannadaTemplesPageRoutingModule } from './kannada-temples-routing.module';

import { KannadaTemplesPage } from './kannada-temples.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KannadaTemplesPageRoutingModule
  ],
  declarations: [KannadaTemplesPage]
})
export class KannadaTemplesPageModule {}
