import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeluguAimsPageRoutingModule } from './telugu-aims-routing.module';

import { TeluguAimsPage } from './telugu-aims.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeluguAimsPageRoutingModule
  ],
  declarations: [TeluguAimsPage]
})
export class TeluguAimsPageModule {}
