import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HindiAimsPage } from './hindi-aims.page';

const routes: Routes = [
  {
    path: '',
    component: HindiAimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HindiAimsPageRoutingModule {}
