import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HindiBooksPage } from './hindi-books.page';

const routes: Routes = [
  {
    path: '',
    component: HindiBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HindiBooksPageRoutingModule {}
