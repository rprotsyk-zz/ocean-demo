import { Component, OnInit } from '@angular/core';
import { OceanService } from '../ocean.service';
import { OceanStoreService } from '../ocean.store';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-ocean-twitter',
  templateUrl: './ocean-twitter.component.html',
  styleUrls: ['./ocean-twitter.component.css']
})
export class OceanTwitterComponent implements OnInit {
  // Radar
  public radarChartLabels: string[] = ['Openness', 'Conscientiousness',
    'Extraversion', 'Agreeableness', 'Neuroticism'];

  public message = 'Here you’ll see your OCEAN scores';
  public messageHint = '';
  public messageImage = 'try-empty';
  public radarChartData: any = [
    {
      data: [], label: '', borderWidth: '8',
      pointStyle: 'circle'
    }
  ];
  public radarChartType = 'radar';
  public loading = false;
  public oceanAdvertBackground = '';
  public twitterName = 'Enter your twitter name';
  public chartColors: Array<Color> = [{
    borderColor: '#d51b5d'
  }];

  public chartOptions = {
    scale: {
      pointLabels: {
        fontSize: 14,
        fontFamily: 'Open Sans'
      }
    }
  };

  constructor(
    private oceanService: OceanService,
    private oceanStore: OceanStoreService
  ) { }

  ngOnInit() {
  }

  public getOcean() {
    this.loading = true;
    this.oceanAdvertBackground = '';
    this.oceanService.getOcean(this.twitterName)
      .subscribe(response => {
        if (response.scores.length > 0) {
          this.radarChartData[0].data = [response.scores[0].score,
              response.scores[1].score,
              response.scores[2].score,
              response.scores[3].score,
              response.scores[4].score] ;
          ;
          this.message = '';
          this.messageHint = '';
          this.messageImage = '';
        } else {
          if (response.status[0] === 'User is not found') {
            this.message = 'Hmmm.. it seems there is no account with this name';
            this.messageHint = 'Please check if it’s correct and enter again';
            this.messageImage = 'try-no-account';
          }
          if (response.status[0] === 'Not enought data to extract OCEAN') {
            this.message = 'It seems it’s not enough text to analyze right now. ';
            this.messageHint = 'We could try to check another account';
            this.messageImage = 'try-not-enough-info';
          }
        }
        this.loading = false;
        this.oceanAdvertBackground = `/assets/img/ads/${response.prof}.jpg`;
      },
      error => {
        this.loading = false;
        if ((<any>error).statusText === 'Unknown Error') {
            this.message = 'Ooops.. It seems something went wrong.';
            this.messageHint = 'Re-send your request';
            this.messageImage = 'try-error';
        }
      });
  }
}
