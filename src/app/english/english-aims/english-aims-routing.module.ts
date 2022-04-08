import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishAimsPage } from './english-aims.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishAimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishAimsPageRoutingModule {}
