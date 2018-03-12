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
  public oceanAdvertBackground = 'https://picsum.photos/450/375/?random';
  public twitterName = 'elon_mask';
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
      .subscribe(val => {
        this.loading = false;
        console.log(val);
        this.oceanAdvertBackground = 'https://picsum.photos/450/375/?random';
      },
      error => {
        this.radarChartData = [
          { data: [10, 20, 10, 20, 30], label: '' }
        ];
        this.loading = false;
        console.log('ERRROR');
        this.oceanAdvertBackground = 'https://picsum.photos/450/375/?random';
      });
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public scroll(el) {
    el.scrollIntoView();
  }
}
