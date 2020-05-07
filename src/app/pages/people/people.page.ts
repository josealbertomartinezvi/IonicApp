import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: any;
  iconname = 'people'

  constructor(private swapiService:SwapiService) { }

  ngOnInit() {
    this.swapiService.getSwapi('people').subscribe(data => {
      this.people = data;
      console.log(data);
    });
  }

}
