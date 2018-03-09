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
    console.log(user);
    return this.httpClient
      .post('http://195.160.232.94:5656/get_ocean', request, { responseType: 'json' });
  }

  public getProfile(scores: Score): Observable<any> {
    console.log(scores);
    return this.httpClient
      .post('http://195.160.232.94:5656/get_profile', scores, { responseType: 'json' });
  }
}

export class Score {
  public scores: number[];
}
