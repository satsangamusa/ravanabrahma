import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishPage } from './english.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishPage
  },
  {
    path: 'english-content',
    loadChildren: () => import('./english-content/english-content.module').then( m => m.EnglishContentPageModule)
  },
  {
    path: 'english-temples',
    loadChildren: () => import('./english-temples/english-temples.module').then( m => m.EnglishTemplesPageModule)
  },
  {
    path: 'english-aims',
    loadChildren: () => import('./english-aims/english-aims.module').then( m => m.EnglishAimsPageModule)
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
    path: 'english-books',
    loadChildren: () => import('./english-books/english-books.module').then( m => m.EnglishBooksPageModule)
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
export class EnglishPageRoutingModule {}
