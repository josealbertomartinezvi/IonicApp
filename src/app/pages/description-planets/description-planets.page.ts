import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {

  planet: any;

  constructor(private swapiService: SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.planet = this.swapiService.getSwapi(`planets/${id}`).subscribe(data => {
        this.planet = data;
        console.log(data)
      });
    });
  }

}
