import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ComicService } from './shared/comic/comic.service';
import { PanelService } from './shared/panel/panel.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComicPlayComponent } from './components/comic-play/comic-play.component';

@RouteConfig([
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/play/:cid',
        name: 'ComicPlay',
        component: ComicPlayComponent
    },
])

@Component({
    selector: 'ic-app',
    host: {
        class:'wrapper-app'
    },
    templateUrl: 'app/app.component.html',
    styleUrls:  ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ComicService,
        PanelService,
    ]
})
export class AppComponent {
    public title = 'Interactive Comics';
}
