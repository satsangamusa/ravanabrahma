import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeluguPageRoutingModule } from './telugu-routing.module';

import { TeluguPage } from './telugu.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeluguPageRoutingModule
  ],
  declarations: [TeluguPage]
})
export class TeluguPageModule {}
