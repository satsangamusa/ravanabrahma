import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiPageRoutingModule } from './hindi-routing.module';

import { HindiPage } from './hindi.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HindiPageRoutingModule
  ],
  declarations: [HindiPage]
})
export class HindiPageModule {}
