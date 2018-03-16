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
    profImage: 'RosettaMiller',
    prof: ['Rosetta Miller'],
    info: [{
      age: '29', occupation: 'Housewife',
      description: `Rosetta married when she was 24 and now has 2 kids who are the center of her universe. 
      Her husband runs a dental clinic, so their family can easily afford spending couple hundreds for clothing. 
      This is also a reason why she sometimes treats her friends outwardly, and may be a bit bossy and impatient. 
      Although she seems to be outgoing, she is quite self-centered and has has to hide it behind her compulsive actions.
       <br>\nAs a good housewife Rosetta is concerned with the quality and prefers fast delivery. 
       She likes to impress her friends and neighbours, she prefers modern design and fashionable goods 
       to complement her status and stay comfortable at the same time.`,
      add_preferences: `Due to high Neuroticism, the <b>transformational and comparative ads<\/b> 
       should drive more attention of consumers with such profiles. This trait also means that the 
       <b>red and purple<\/b> colors have better influence on the person. <br>\nLow Openness also 
       suggests that consumer might better react to a <b>good-looking design and style of the product<\/b>
        and is less concerned about the functionality and features. It also suggests that consumer would be
         attracted to options of <b>free-return policy<\/b> or <b>ability to see the product in local shop<\/b>.
          <br>\nLow Extraversion also defines that person would 
      <b>care less about the fashion and popularity<\/b> of a particular <b>brand<\/b>.\n`,
    }]
  };
  public loading = false;
  public error = '';
  public profileAdvertBackground = `/assets/img/asd/RosettaMiller.jpg`;
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
        const img = profile.prof[0].replace(' ', '');
        this.profile.profImage = img;
        this.profileAdvertBackground = `/assets/img/asd/${img}.jpg`;
      },
      error => {
        this.loading = false;
      });
  }
}

export class Profile {
  info: Information[];
  prof: string[];
  profImage: string;
  scores: ScoreResult[];
  status: string[];
}

export class Information {
  occupation: string;
  age: string;
  description: string;
  add_preferences: string;
}

export class ScoreResult {
  personality_trait: string;
  score: string;
  percentile: string;
}


