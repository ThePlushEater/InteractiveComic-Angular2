import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Comic } from './../../shared/comic/comic';
import { ComicService } from './../../shared/comic/comic.service';

@Component({
  selector: 'ic-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    comics: Comic[] = [];
    constructor(private _router: Router, private _heroService: ComicService) { }
    ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.comics = heroes.slice(0,4));
    }
    gotoDetail(comic: Comic) {
        //let link = ['HeroDetail', { id: hero.id }];
        //this._router.navigate(link);
    }
}
