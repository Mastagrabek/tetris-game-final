import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {GameService} from '../services/game.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  constructor(
    private router: Router,
    private gameService: GameService,
    private toast: MatSnackBar
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.gameService.name) {
      this.router.navigate(['/intro']);
      this.toast.open("You are not authorized");
      return false;
    }
    return true;
  }

}
