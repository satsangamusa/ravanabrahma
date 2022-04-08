import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeluguContentPage } from './telugu-content.page';

const routes: Routes = [
  {
    path: '',
    component: TeluguContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeluguContentPageRoutingModule {}
