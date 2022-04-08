import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamilPage } from './tamil.page';

const routes: Routes = [
  {
    path: '',
    component: TamilPage
  },
  {
    path: 'tamil-content',
    loadChildren: () => import('./tamil-content/tamil-content.module').then( m => m.TamilContentPageModule)
  },
  {
    path: 'tamil-temples',
    loadChildren: () => import('./tamil-temples/tamil-temples.module').then( m => m.TamilTemplesPageModule)
  },
  
  {
    path: 'tamil-aims',
    loadChildren: () => import('./tamil-aims/tamil-aims.module').then( m => m.TamilAimsPageModule)
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
    path: 'tamil-books',
    loadChildren: () => import('./tamil-books/tamil-books.module').then( m => m.TamilBooksPageModule)
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
export class TamilPageRoutingModule {}
