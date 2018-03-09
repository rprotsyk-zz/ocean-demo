import { Component, OnInit } from '@angular/core';
import {OceanService} from '../ocean.service';
import {OceanStoreService} from '../ocean.store';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

export class AvatarComponent implements OnInit {
  constructor(
      private oceanService: OceanService,
      private oceanStore: OceanStoreService
  ) {}

  ngOnInit() {
  }
}
