import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishBooksPage } from './english-books.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishBooksPageRoutingModule {}
