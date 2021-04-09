import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';
import {Score} from '../../../models/score';

@Component({
  selector: 'app-game-scores-dialog',
  templateUrl: './game-scores-dialog.component.html',
  styleUrls: ['./game-scores-dialog.component.scss']
})
export class GameScoresDialogComponent implements OnInit {
  scores: Score[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadScores();
  }

  loadScores(): void {
    this.gameService.loadScores().subscribe((scores) => {
      this.scores = scores;
      console.log(this.scores);
    })
  }
}
