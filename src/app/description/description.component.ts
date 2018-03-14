import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  public isOpened = false;

  public toggleState() {
    this.isOpened = !this.isOpened;
  }

  ngOnInit() {}

}
