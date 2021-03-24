import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GameCoreModule} from './game-core/game-core.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material/material.module';


@NgModule ({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GameCoreModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
