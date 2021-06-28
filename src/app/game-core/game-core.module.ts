import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './intro-page/intro-page.component';
import {GamePageComponent} from './game-page/game-page.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { PlayerFormComponent } from './player-form/player-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TetrisCoreModule} from 'ngx-tetris'
import {HotkeyModule} from 'angular2-hotkeys';



@NgModule({
  declarations: [IntroPageComponent, GamePageComponent, PlayerFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    TetrisCoreModule,
    HotkeyModule.forRoot()
  ],
  exports: [IntroPageComponent, GamePageComponent]
})

export class GameCoreModule { }
