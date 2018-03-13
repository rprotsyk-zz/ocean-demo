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

  public radarChartData: any = [
    {
      data: [30, 20, 50, 20, 10], label: '', borderWidth: '8',
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
          this.radarChartData = [
            { data: [response.scores[0].score,
              response.scores[1].score,
              response.scores[2].score,
              response.scores[3].score,
              response.scores[4].score], label: '' }
          ];
        }
        this.loading = false;
        this.oceanAdvertBackground = `/assets/img/ads/${response.prof}.jpg`;
      },
      error => {
        this.loading = false;
      });
  }
}
