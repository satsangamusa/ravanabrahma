import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeluguTemplesPage } from './telugu-temples.page';

const routes: Routes = [
  {
    path: '',
    component: TeluguTemplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeluguTemplesPageRoutingModule {}
