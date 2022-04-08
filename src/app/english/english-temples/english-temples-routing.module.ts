import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishTemplesPage } from './english-temples.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishTemplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishTemplesPageRoutingModule {}
