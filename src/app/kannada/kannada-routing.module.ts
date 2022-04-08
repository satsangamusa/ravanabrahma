import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KannadaPage } from './kannada.page';

const routes: Routes = [
  {
    path: '',
    component: KannadaPage
  },
  {
    path: 'kannada-content',
    loadChildren: () => import('./kannada-content/kannada-content.module').then( m => m.KannadaContentPageModule)
  },
  {
    path: 'kannada-temples',
    loadChildren: () => import('./kannada-temples/kannada-temples.module').then( m => m.KannadaTemplesPageModule)
  },
  {
    path: 'kannada-aims',
    loadChildren: () => import('./kannada-aims/kannada-aims.module').then( m => m.KannadaAimsPageModule)
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
    path: 'kannada-books',
    loadChildren: () => import('./kannada-books/kannada-books.module').then( m => m.KannadaBooksPageModule)
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
export class KannadaPageRoutingModule {}
