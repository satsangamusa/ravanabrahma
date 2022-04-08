import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamilContentPageRoutingModule } from './tamil-content-routing.module';

import { TamilContentPage } from './tamil-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamilContentPageRoutingModule
  ],
  declarations: [TamilContentPage]
})
export class TamilContentPageModule {}
