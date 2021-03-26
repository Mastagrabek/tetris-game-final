import { Component, OnInit, ViewChild } from '@angular/core';
import {PlayerFormComponent} from '../player-form/player-form.component';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  @ViewChild('playerForm') flightForm : PlayerFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
