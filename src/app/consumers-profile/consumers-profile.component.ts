import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-consumers-profile',
  templateUrl: './consumers-profile.component.html',
  styleUrls: ['./consumers-profile.component.scss']
})
export class ConsumersProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log(event);
  }

}
