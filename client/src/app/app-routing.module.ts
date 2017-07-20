import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DisplayComponent } from './main/display/display.component';
import { NewQuestionComponent } from './main/display/new-question/new-question.component';
import { ScoresComponent } from './main/display/scores/scores.component';

import { PlayComponent } from './main/play/play.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: '/scores', pathMatch: 'full' },
      { path: 'scores', component: ScoresComponent },
      { path: 'add', component: NewQuestionComponent }
  ] },
  { path: 'play', component: PlayComponent },
  { path: '', redirectTo: '/main/scores', pathMatch: 'full' },
  { path: 'withNotice/:username/:score', redirectTo: '/main/scores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
