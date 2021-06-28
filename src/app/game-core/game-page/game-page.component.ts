import {Component, OnInit, ViewChild} from '@angular/core';
import {TetrisCoreComponent} from 'ngx-tetris';
import {HotkeysService, Hotkey} from 'angular2-hotkeys';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ScoresListComponent} from '../../dialogs/scores-list/scores-list.component';
import {GameService} from '../../services/game.service';
import {GameOverComponent} from '../../dialogs/game-over/game-over.component';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  points: number = 0;
  name: string;
  isGameStarted: boolean = false;
  blackAndWhite: boolean = false;

  @ViewChild('game')
  private _tetris: TetrisCoreComponent;

  constructor(
    private _hotkeysService: HotkeysService,
    private router: Router,
    private _route: ActivatedRoute,
    private dialog: MatDialog,
    private gameService: GameService
  ) {
    this._addHotkeys();
  }

  ngOnInit(): void {
    this.name = this.gameService.name;
    if(this._route.snapshot.params.pallete === 'normal') {
      this.blackAndWhite = false
    } else {
      this.blackAndWhite = true;
    }

    console.log(this.blackAndWhite)
  }

  onLineCleared() {
    this.points += 20;
  }

  showScores() {
    this.dialog.open(ScoresListComponent);
  }

  onExitGame() {
    this.router.navigate(['/intro']);
  }

  onGameOver() {
    this.dialog.open(GameOverComponent);
    this.gameService.score = this.points;
  }

  onResetGame() {
    this._tetris.actionReset();
    this.points = 0;
  }

  onStartGame() {
    this._tetris.actionStart();
    this.isGameStarted = true;
  }

  onStopGame() {
    this._tetris.actionStop();
    this.isGameStarted = false;
  }

  onChangeColors() {
    this.blackAndWhite = true;
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
