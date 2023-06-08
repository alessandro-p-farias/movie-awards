import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-three',
  templateUrl: './top-three.component.html',
  styleUrls: ['./top-three.component.scss']
})
export class TopThreeComponent implements OnInit {

  topThree = {
    'studios': [
      {
        'name': 'Studio Name',
        'winCount': 9
      },
      {
        'name': 'Studio Name',
        'winCount': 9
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
