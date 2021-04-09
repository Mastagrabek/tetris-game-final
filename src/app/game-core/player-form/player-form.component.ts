import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private toast: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
}
