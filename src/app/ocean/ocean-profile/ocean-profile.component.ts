import { Component, OnInit } from '@angular/core';
import { OceanService, Score } from '../ocean.service';
import { OceanStoreService } from '../ocean.store';

@Component({
  selector: 'app-ocean-profile',
  templateUrl: './ocean-profile.component.html',
  styleUrls: ['./ocean-profile.component.css']
})
export class OceanProfileComponent implements OnInit {

  public score: Score = { scores: [50, 50, 50, 50, 50] };
  public scoreLabels: string[] = ['Openness', 'Conscientiousness',
    'Extraversion', 'Agreeableness', 'Neuroticism'];

  public profile: Profile = <Profile>{
    prof: ['Rosetta Miller'],
    info: [{
      age: '29', occupation: 'Housewife',
      description: `Rosetta married when she was 24 and now has
      2 kids who are the center of her universe. Her husband runs a
      dental clinic, so their family can easily afford spending couple
      hundreds for clothing. This is also a reason why she sometimes treats
      her friends outwardly, and may be a bit bossy and impatient. Although
      she seems to be outgoing, she is quite self-centered and has has to hide
      it behind her compulsive actions. As a good housewife Rosetta is
      concerned with the quality and prefers fast delivery. She likes to impress
      her friends and neighbours, she prefers modern design and fashionable goods
      to complement her status and stay comfortable at the same time.`}]
  };
  public loading = false;
  public error = '';
  public profileAdvertBackground = `/assets/img/asd/Rosetta Miller.jpg`;
  constructor(
    private oceanService: OceanService,
    private oceanStore: OceanStoreService
  ) { }

  ngOnInit() {
  }

  public getProfile() {
    this.loading = true;
    this.profileAdvertBackground = '';
    this.oceanService.getProfile(this.score)
      .subscribe((profile: Profile) => {
        this.loading = false;
        this.profile = profile;
        this.profileAdvertBackground = `/assets/img/asd/${profile.prof[0]}.jpg`;
      },
      error => {
        this.loading = false;
      });
  }
}

export class Profile {
  info: Information[];
  prof: string[];
  scores: ScoreResult[];
  status: string[];
}

export class Information {
  occupation: string;
  age: string;
  description: string;
}

export class ScoreResult {
  personality_trait: string;
  score: string;
  percentile: string;
}


