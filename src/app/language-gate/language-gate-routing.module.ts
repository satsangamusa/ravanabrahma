import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageGatePage } from './language-gate.page';

const routes: Routes = [
  {
    path: '',
    component: LanguageGatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageGatePageRoutingModule {}
