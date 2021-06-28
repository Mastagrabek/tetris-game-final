import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ScoresListComponent} from '../scores-list/scores-list.component';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
  scoreData = {
    name: '',
    score: null
  }


  constructor(
    private gameService: GameService,
    private dialogRef: MatDialogRef<GameOverComponent>,
    private dialog: MatDialog,
    private toast: MatSnackBar
  ) { }

  ngOnInit(): void {
   this.scoreData.name = this.gameService.name;
   this.scoreData.score = this.gameService.score;
  }

  addScore() {
    this.gameService.addScore(this.scoreData).subscribe(data => {
      console.log(data);
      this.onAddScoreSuccess();
    })
  }

  onAddScoreSuccess() {
    this.dialogRef.close();
    this.toast.open('Score was successfuly added.', '', { panelClass: 'toast-success' });
    this.dialog.open(ScoresListComponent);
  }

}
