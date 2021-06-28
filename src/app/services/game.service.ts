import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Score} from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public API_URL = 'http://localhost:8080/';
  public name: string;
  public score: number;
  public blackAndWhite: boolean = false;



  constructor(private http: HttpClient) {
  }

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.API_URL + 'scores', {headers: {'Accept': 'application/json'}});
  }

  addScore(score: Score):Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(score);
    return this.http.post(this.API_URL + 'scores', body, {'headers': headers})
  }
}
