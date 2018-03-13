import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { OceanStoreService } from './ocean.store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OceanService {

  constructor(
    private httpClient: HttpClient,
    private oceanStoreService: OceanStoreService
  ) { }

  public getOcean(user: string): Observable<any> {
    const request = {
      user: user
    };
    return this.httpClient
      .post('https://cors-anywhere.herokuapp.com/http://195.160.232.94:5656/get_ocean', 
      request, { responseType: 'json' });
  }

  public getProfile(score: Score): Observable<any> {
    const scoreRequest = <Score>{
      scores: [score.scores[0] / 100, score.scores[1] / 100,
      score.scores[2] / 100, score.scores[3] / 100, score.scores[4] / 100]
    };
    return this.httpClient
      .post('https://cors-anywhere.herokuapp.com/http://195.160.232.94:5656/get_profile',
      scoreRequest, { responseType: 'json' });
  }
}

export class Score {
  public scores: number[];
}
