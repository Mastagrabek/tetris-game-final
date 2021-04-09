import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Score} from '../models/score';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private API_URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  loadScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.API_URL + 'scores', {headers: {'Accept': 'application/json'}});
  }
}
