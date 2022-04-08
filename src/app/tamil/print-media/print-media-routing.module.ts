import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintMediaPage } from './print-media.page';

const routes: Routes = [
  {
    path: '',
    component: PrintMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintMediaPageRoutingModule {}
