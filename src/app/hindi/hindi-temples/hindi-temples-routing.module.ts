import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HindiTemplesPage } from './hindi-temples.page';

const routes: Routes = [
  {
    path: '',
    component: HindiTemplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HindiTemplesPageRoutingModule {}
