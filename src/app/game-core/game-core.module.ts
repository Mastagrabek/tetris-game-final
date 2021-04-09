import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './intro-page/intro-page.component';
import {GamePageComponent} from './game-page/game-page.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { PlayerFormComponent } from './player-form/player-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {TetrisCoreModule} from 'ngx-tetris';
import {HotkeyModule} from 'angular2-hotkeys';
import { GameScoresDialogComponent } from './dialogs/game-scores-dialog/game-scores-dialog.component'




@NgModule({
  declarations: [IntroPageComponent, GamePageComponent, PlayerFormComponent, GameScoresDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    TetrisCoreModule,
    HotkeyModule.forRoot()
  ],
  entryComponents: [GameScoresDialogComponent],
  exports: [IntroPageComponent, GamePageComponent]
})

export class GameCoreModule { }
