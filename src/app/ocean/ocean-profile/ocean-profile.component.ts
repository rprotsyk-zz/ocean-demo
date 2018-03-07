import { Component, OnInit } from '@angular/core';
import {OceanService} from '../ocean.service';
import {OceanStoreService} from '../ocean.store';

@Component({
  selector: 'app-ocean-profile',
  templateUrl: './ocean-profile.component.html',
  styleUrls: ['./ocean-profile.component.css']
})
export class OceanProfileComponent implements OnInit {
  constructor(
      private oceanService: OceanService,
      private oceanStore: OceanStoreService
  ) {}

  ngOnInit() {
  }
}
