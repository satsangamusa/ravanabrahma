import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintMediaPageRoutingModule } from './print-media-routing.module';

import { PrintMediaPage } from './print-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintMediaPageRoutingModule
  ],
  declarations: [PrintMediaPage]
})
export class PrintMediaPageModule {}
