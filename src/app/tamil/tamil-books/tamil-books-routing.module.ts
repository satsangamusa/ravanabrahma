import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamilBooksPage } from './tamil-books.page';

const routes: Routes = [
  {
    path: '',
    component: TamilBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamilBooksPageRoutingModule {}
