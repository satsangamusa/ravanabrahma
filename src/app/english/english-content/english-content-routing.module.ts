import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishContentPage } from './english-content.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishContentPageRoutingModule {}
