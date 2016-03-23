import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams, OnActivate, ComponentInstruction } from 'angular2/router';

import { Comic } from '../../shared/comic/comic';
import { Panel } from '../../shared/panel/panel';
import { ComicService } from '../../shared/comic/comic.service';
import { PanelService } from '../../shared/panel/panel.service';

@Component({
    selector: 'ic-comic-detail',
    host: {
        class:'wrapper-content wrapper-vertical-flex'
    },
    templateUrl: 'app/components/comic-play/comic-play.component.html',
    styleUrls:  ['app/components/comic-play/comic-play.component.css'],
})

export class ComicPlayComponent implements OnInit {
    selectedPanel: Panel;
    canvasWidth = '100%';
    canvasHeight = '100%';
    constructor(private _router: Router, private _routeParams: RouteParams, private _panelService: PanelService) { }
    ngOnInit() {
        let cid = +this._routeParams.get('cid');
        this._panelService.getPanelsFromComicId(cid).then(panels => {
            this.selectedPanel = panels[0];
            //this.comics = comics.slice(0,6);
            //this.selectedComic = this.comics[0];
        });
        //let id = +this._routeParams.get('id');
        //this._panelService.getHero(id).then(hero => this.hero = hero);
    }
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        //TweenMax.fromTo($(".title"), 1, {opacity: 0}, {opacity: 1});
        //return new Promise((res, rej) => setTimeout(() => res(1), 1000));
    }
    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        //TweenMax.fromTo($(".title"), 1, {opacity:1}, {opacity: 0});
        return new Promise((res, rej) => setTimeout(() => res(1), 500));
    }
    gotoNext(panel: Panel) {
        //let link = ['ComicPlay', { id: comic.id }];
        //this._router.navigate(link);
    }
}
