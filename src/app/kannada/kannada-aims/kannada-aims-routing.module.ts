import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KannadaAimsPage } from './kannada-aims.page';

const routes: Routes = [
  {
    path: '',
    component: KannadaAimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KannadaAimsPageRoutingModule {}
