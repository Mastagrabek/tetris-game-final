import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  form: FormGroup;
  highContrast: boolean = false;

  constructor(
    private router: Router, 
    private gameService: GameService,
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit(): void {
    this.buildReactiveForm();
  }

  onSubmitButton() {
    this.gameService.name = this.form.value.playerName;
    if(this.highContrast === false) {
      this.router.navigate(['/game', 'normal']);
    } else if(this.highContrast === true) {
      this.router.navigate(['/game', 'contrast'])
    }
  }


  buildReactiveForm() {
    this.form = this.formBuilder.group({
      playerName: ['', {validators: [Validators.required]}]
    })
  }
}
