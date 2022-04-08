import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeluguBooksPage } from './telugu-books.page';

const routes: Routes = [
  {
    path: '',
    component: TeluguBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeluguBooksPageRoutingModule {}
