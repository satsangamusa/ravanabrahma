import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KannadaBooksPage } from './kannada-books.page';

const routes: Routes = [
  {
    path: '',
    component: KannadaBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KannadaBooksPageRoutingModule {}
