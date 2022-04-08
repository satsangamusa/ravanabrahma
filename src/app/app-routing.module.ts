import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'lg',
    loadChildren: () => import('./language-gate/language-gate.module').then( m => m.LanguageGatePageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lg',
    pathMatch: 'full'
  },
  {
    path: 'telugu',
    loadChildren: () => import('./telugu/telugu.module').then( m => m.TeluguPageModule)
  },
  {
    path: 'kannada',
    loadChildren: () => import('./kannada/kannada.module').then( m => m.KannadaPageModule)
  },
  {
    path: 'tamil',
    loadChildren: () => import('./tamil/tamil.module').then( m => m.TamilPageModule)
  },
  {
    path: 'hindi',
    loadChildren: () => import('./hindi/hindi.module').then( m => m.HindiPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
