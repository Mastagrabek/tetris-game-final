import { Component, OnInit, ViewChild } from '@angular/core';
import {PlayerFormComponent} from '../player-form/player-form.component';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  @ViewChild('playerForm') flightForm : PlayerFormComponent;


  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }
}
