import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeluguPage } from './telugu.page';

const routes: Routes = [
  {
    path: '',
    component: TeluguPage
  },
  {
    path: 'telugu-content',
    loadChildren: () => import('./telugu-content/telugu-content.module').then( m => m.TeluguContentPageModule)
  },
  {
    path: 'telugu-temples',
    loadChildren: () => import('./telugu-temples/telugu-temples.module').then( m => m.TeluguTemplesPageModule)
  },
  {
    path: 'telugu-aims',
    loadChildren: () => import('./telugu-aims/telugu-aims.module').then( m => m.TeluguAimsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'telugu-books',
    loadChildren: () => import('./telugu-books/telugu-books.module').then( m => m.TeluguBooksPageModule)
  },
  {
    path: 'print-media',
    loadChildren: () => import('./print-media/print-media.module').then( m => m.PrintMediaPageModule)
  },
  {
    path: 'question-answer',
    loadChildren: () => import('./question-answer/question-answer.module').then( m => m.QuestionAnswerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeluguPageRoutingModule {}
