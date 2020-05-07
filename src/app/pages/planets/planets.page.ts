import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: any;
  iconname = 'planet-outline';

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getSwapi('planets').subscribe(data => {
      this.planets = data;
      console.log(data);
    });
  }

}
