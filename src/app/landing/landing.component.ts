import { Component, OnInit, Input } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: [
        'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
        'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
    ]
  });

  constructor(public fullpageService: MnFullpageService) { }

  ngOnInit() {
  }

}
