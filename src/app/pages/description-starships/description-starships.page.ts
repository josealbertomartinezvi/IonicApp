import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-starships',
  templateUrl: './description-starships.page.html',
  styleUrls: ['./description-starships.page.scss'],
})
export class DescriptionStarshipsPage implements OnInit {

  starships: any;

  constructor(private swapiService: SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.starships = this.swapiService.getSwapi(`starships/${id}`).subscribe(data => {
        this.starships = data;
        console.log(data)
      });
    });
  }

}
