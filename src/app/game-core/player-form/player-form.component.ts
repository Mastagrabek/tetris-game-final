import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  playerForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.buildPlayerForm();
  }

  private buildPlayerForm() {
    this.playerForm = this.formBuilder.group({
      name: ['', {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)]}],
      email: ['', {validators: [Validators.required, Validators.email]}]
    })
  }
}
