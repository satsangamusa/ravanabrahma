import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishTemplesPageRoutingModule } from './english-temples-routing.module';

import { EnglishTemplesPage } from './english-temples.page';
 
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 
    EnglishTemplesPageRoutingModule
  ],
  declarations: [EnglishTemplesPage]
})
export class EnglishTemplesPageModule {}
