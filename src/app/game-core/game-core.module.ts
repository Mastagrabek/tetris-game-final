import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './intro-page/intro-page.component';
import {GamePageComponent} from './game-page/game-page.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [IntroPageComponent, GamePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [IntroPageComponent, GamePageComponent]
})

export class GameCoreModule { }
