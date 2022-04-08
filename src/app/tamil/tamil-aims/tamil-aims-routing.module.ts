import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamilAimsPage } from './tamil-aims.page';

const routes: Routes = [
  {
    path: '',
    component: TamilAimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamilAimsPageRoutingModule {}
