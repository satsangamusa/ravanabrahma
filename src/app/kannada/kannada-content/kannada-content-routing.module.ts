import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KannadaContentPage } from './kannada-content.page';

const routes: Routes = [
  {
    path: '',
    component: KannadaContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KannadaContentPageRoutingModule {}
