import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HindiPage } from './hindi.page';

const routes: Routes = [
  {
    path: '',
    component: HindiPage
  },
  {
    path: 'hindi-content',
    loadChildren: () => import('./hindi-content/hindi-content.module').then( m => m.HindiContentPageModule)
  },
  {
    path: 'hindi-temples',
    loadChildren: () => import('./hindi-temples/hindi-temples.module').then( m => m.HindiTemplesPageModule)
  },
  {
    path: 'hindi-aims',
    loadChildren: () => import('./hindi-aims/hindi-aims.module').then( m => m.HindiAimsPageModule)
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
    path: 'hindi-books',
    loadChildren: () => import('./hindi-books/hindi-books.module').then( m => m.HindiBooksPageModule)
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
export class HindiPageRoutingModule {}
