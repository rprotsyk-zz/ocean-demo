import { Component, OnInit } from '@angular/core';
import {OceanService, Score} from '../ocean.service';
import {OceanStoreService} from '../ocean.store';

@Component({
  selector: 'app-ocean-profile',
  templateUrl: './ocean-profile.component.html',
  styleUrls: ['./ocean-profile.component.css']
})
export class OceanProfileComponent implements OnInit {

  public score: Score = { scores : [50, 50, 50, 50, 50, 50] } ;
  public loading = false;
  public profileAdvertBackground = 'https://picsum.photos/450/375/?random';
  constructor(
      private oceanService: OceanService,
      private oceanStore: OceanStoreService
  ) {}

  ngOnInit() {
  }

  public getProfile() {
    this.loading = true;
    this.profileAdvertBackground = '';
    this.oceanService.getProfile(this.score)
    .subscribe(val => {
      this.loading = false;
      console.log(val);
      this.profileAdvertBackground =  'https://picsum.photos/450/375/?random';
    },
    error => {
      this.loading = false;
      console.log('ERRROR');
      this.profileAdvertBackground =  'https://picsum.photos/450/375/?random';
    });
  }
}
