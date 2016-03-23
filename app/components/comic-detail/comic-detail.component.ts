import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

import { Comic } from '../../shared/comic/comic';
import { ComicService } from '../../shared/comic/comic.service';
import { Panel } from '../../shared/panel/panel';
import { PanelService } from '../../shared/panel/panel.service';

@Component({
    selector: 'ic-comic-detail',
    host: {
        class:'wrapper-content wrapper-vertical-flex'
    },
    templateUrl: 'app/components/comic-detail/comic-detail.component.html',
    styleUrls:  ['app/components/comic-detail/comic-detail.component.css'],
    inputs: ['comic'],
})

export class ComicDetailComponent implements OnInit {
    comic: Comic;
    public btnPlay = 'Play The Comic >>>';
    constructor(private _router: Router, private _routeParams: RouteParams, private _comicService: ComicService, private _panelService: PanelService) { }
    ngOnInit() {

        //let id = +this._routeParams.get('id');
        //this._comicService.getHero(id).then(hero => this.hero = hero);
    }
    gotoPlay(comic: Comic) {
        this._panelService.getPanelsFromComic(comic).then(panels => {
            let link = ['ComicPlay', { cid: comic.id }];
            this._router.navigate(link);
        });
    }
}
