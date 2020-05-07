import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-people',
  templateUrl: './description-people.page.html',
  styleUrls: ['./description-people.page.scss'],
})
export class DescriptionPeoplePage implements OnInit {

  people: any;

  constructor(private swapiService: SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.people = this.swapiService.getSwapi(`people/${id}`).subscribe(data => {
        this.people = data;
        console.log(data)
      });
    });
  }

}
