import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starships: any;
  iconname = 'airplane-outline'

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getSwapi('starships').subscribe(data => {
      this.starships = data;
      console.log(data);
    });
  }

}
