import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeluguContentPageRoutingModule } from './telugu-content-routing.module';

import { TeluguContentPage } from './telugu-content.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeluguContentPageRoutingModule
  ],
  declarations: [TeluguContentPage]
})
export class TeluguContentPageModule {}
