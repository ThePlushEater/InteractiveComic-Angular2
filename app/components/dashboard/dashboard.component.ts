import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Router, RouteParams, OnActivate, ComponentInstruction } from 'angular2/router';

import { Comic } from '../../shared/comic/comic';
import { ComicService } from '../../shared/comic/comic.service';
import { ComicDetailComponent } from '../comic-detail/comic-detail.component';

@Component({
  selector: 'ic-dashboard',
  host: {
      class:'wrapper-content wrapper-vertical-flex'
  },
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  styleUrls:  ['app/components/dashboard/dashboard.component.css'],
  directives: [
      ComicDetailComponent
  ],
})

export class DashboardComponent implements OnInit {
    comics: Comic[];
    selectedComic: Comic;
    constructor(private _router: Router, private _comicService: ComicService) { }
    ngOnInit() {
        this._comicService.getComicsAll().then(comics => {this.comics = comics.slice(0,6); this.selectedComic = this.comics[0];});
    }
    openDetail(comic: Comic) {
        this.selectedComic = comic;
        //let link = ['HeroDetail', { id: hero.id }];
        //this._router.navigate(link);
    }
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        //TweenMax.fromTo($(".title"), 1, {opacity: 0}, {opacity: 1});
        //return new Promise((res, rej) => setTimeout(() => res(1), 1000));
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        //TweenMax.fromTo($(".title"), 1, {opacity:1}, {opacity: 0});
        return new Promise((res, rej) => setTimeout(() => res(1), 500));
    }
}
