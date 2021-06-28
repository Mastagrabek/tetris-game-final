import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Score} from '../../models/score';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.scss']
})
export class ScoresListComponent implements OnInit {
  scores: Score[];
  sortingType: string = 'descending';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getScores();
  }

  getScores() {
    this.gameService.getScores()
      .subscribe(data => {
        this.scores = data;
      })
  }

  public get sortedData() {
    return this.scores.sort((a,b) => {
      if (this.sortingType === 'descending') {
        return b.score - a.score;
      } else if (this.sortingType === 'ascending') {
        return a.score - b.score;
      }
    })
  }

  changeSortingTypeAsc() {
    this.sortingType = 'ascending';
    console.log(this.sortingType)
  }

  changeSortingTypeDesc() {
    this.sortingType = 'descending';
    console.log(this.sortingType)
  }
}
