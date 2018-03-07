import { Component, OnInit } from '@angular/core';
import { OceanService } from '../ocean.service';
import { OceanStoreService } from '../ocean.store';

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
    { data: [50, 60, 70, 20, 40], label: '' }
  ];
  public radarChartType = 'radar';

  constructor(
    private oceanService: OceanService,
    private oceanStore: OceanStoreService
  ) { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
