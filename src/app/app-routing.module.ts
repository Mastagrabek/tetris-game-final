import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IntroPageComponent} from './game-core/intro-page/intro-page.component';
import {GamePageComponent} from './game-core/game-page/game-page.component';


const routes : Routes = [
  { path: '',  redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroPageComponent },
  { path: 'game', component: GamePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
