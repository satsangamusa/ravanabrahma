import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguageGatePageRoutingModule } from './language-gate-routing.module';

import { LanguageGatePage } from './language-gate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageGatePageRoutingModule
  ],
  declarations: [LanguageGatePage]
})
export class LanguageGatePageModule {}
