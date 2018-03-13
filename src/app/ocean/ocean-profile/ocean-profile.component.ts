import { Component, OnInit } from '@angular/core';
import {OceanService, Score} from '../ocean.service';
import {OceanStoreService} from '../ocean.store';

@Component({
  selector: 'app-ocean-profile',
  templateUrl: './ocean-profile.component.html',
  styleUrls: ['./ocean-profile.component.css']
})
export class OceanProfileComponent implements OnInit {

  public score: Score = { scores : [50, 50, 50, 50, 50]};
  public scoreLabels: string[] = ['Openness', 'Conscientiousness',
    'Extraversion', 'Agreeableness', 'Neuroticism'];

  public profile: Profile = <Profile>{ prof: ['Rosetta Miller'],
      info: [{age: '29', occupation: 'housewife', description: ''}]};
  public loading = false;
  public error = '';
  public profileAdvertBackground = '';
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
    .subscribe((profile: Profile) => {
      this.loading = false;
      console.log(profile);
      this.profile = profile;
      this.profileAdvertBackground = `/assets/img/ads/${profile.prof[0]}.png`;
    },
    error => {
      this.loading = false;
    });
  }
}

export class Profile {
  info: Information[];
  prof: string[];
}

export class Information {
  occupation: string;
  age: string;
  description: string;
}
