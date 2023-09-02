import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HindiContentPageRoutingModule } from './hindi-content-routing.module';

import { HindiContentPage } from './hindi-content.page';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    HindiContentPageRoutingModule
  ],
  declarations: [HindiContentPage]
})
export class HindiContentPageModule {}
