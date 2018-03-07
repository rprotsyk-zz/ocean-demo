import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Http} from '@angular/http';
import {OceanStoreService} from './ocean.store';

@Injectable()
export class OceanService {

  constructor(
      private http: Http,
      private oceanStoreService: OceanStoreService
  ) { }
}
