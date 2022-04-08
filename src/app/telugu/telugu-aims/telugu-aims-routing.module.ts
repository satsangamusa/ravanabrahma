import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeluguAimsPage } from './telugu-aims.page';

const routes: Routes = [
  {
    path: '',
    component: TeluguAimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeluguAimsPageRoutingModule {}
