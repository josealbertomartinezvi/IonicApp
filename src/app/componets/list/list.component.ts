import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() swapi;
  @Input() icon;

  constructor(private router: Router) { }

  ngOnInit() {}

  showItem(item){
    let urlElement = item.url.split('/');
    this.router.navigateByUrl(`/${urlElement[4]}/${urlElement[5]}`);
  }

}
