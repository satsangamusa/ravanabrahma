import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamilContentPage } from './tamil-content.page';

const routes: Routes = [
  {
    path: '',
    component: TamilContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamilContentPageRoutingModule {}
