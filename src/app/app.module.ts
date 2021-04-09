import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {GameCoreModule} from './game-core/game-core.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material/material.module';;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GameService} from './services/game.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule ({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GameCoreModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
