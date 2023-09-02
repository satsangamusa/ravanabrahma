import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamilTemplesPageRoutingModule } from './tamil-temples-routing.module';

import { TamilTemplesPage } from './tamil-temples.page';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamilTemplesPageRoutingModule
  ],
  declarations: [TamilTemplesPage]
})
export class TamilTemplesPageModule {}
