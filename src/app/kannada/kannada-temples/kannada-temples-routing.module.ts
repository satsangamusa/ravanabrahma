import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KannadaTemplesPage } from './kannada-temples.page';

const routes: Routes = [
  {
    path: '',
    component: KannadaTemplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KannadaTemplesPageRoutingModule {}
