import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GameCoreModule} from './game-core/game-core.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScoresListComponent } from './dialogs/scores-list/scores-list.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GameOverComponent } from './dialogs/game-over/game-over.component';


@NgModule ({
  declarations: [
    AppComponent,
    ScoresListComponent,
    GameOverComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameCoreModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    ScoresListComponent,
    GameOverComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
