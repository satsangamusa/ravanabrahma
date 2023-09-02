import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiTemplesPageRoutingModule } from './hindi-temples-routing.module';

import { HindiTemplesPage } from './hindi-temples.page';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    HindiTemplesPageRoutingModule
  ],
  declarations: [HindiTemplesPage]
})
export class HindiTemplesPageModule {}
