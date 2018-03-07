import { Component, OnInit } from '@angular/core';
import {OceanService} from '../ocean.service';
import {OceanStoreService} from '../ocean.store';

@Component({
  selector: 'app-ocean-twitter',
  templateUrl: './ocean-twitter.component.html',
  styleUrls: ['./ocean-twitter.component.css']
})
export class OceanTwitterComponent implements OnInit {
  constructor(
      private oceanService: OceanService,
      private oceanStore: OceanStoreService
  ) {}

  ngOnInit() {
  }
}
