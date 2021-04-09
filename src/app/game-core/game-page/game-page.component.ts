import {Component, OnInit, ViewChild} from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {GameScoresDialogComponent} from '../dialogs/game-scores-dialog/game-scores-dialog.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @ViewChild('game') private _tetris: TetrisCoreComponent;

  points: number = 0;

  constructor(
    private _hotkeysService: HotkeysService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this._addHotkeys();
  }

  ngOnInit(): void {
  }


  public onLineCleared() {
    this.points=+10;
  }

  public onGameOver() {
    alert('game over');
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }

  public onExitGame() {
    this.router.navigate(['/intro']);
  }

  public showScores(){
    this.dialog.open(GameScoresDialogComponent);
  }

  private _addHotkeys() {
    this._hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
      this._tetris.actionRotate();
      return false;
    }));

    this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
      this._tetris.actionLeft();
      return false;
    }));

    this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
      this._tetris.actionDown();
      return false;
    }));

    this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
      this._tetris.actionRight();
      return false;
    }));
  }
}
