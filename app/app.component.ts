import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ComicService } from './shared/comic/comic.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
])

@Component({
    selector: 'ic-app',
    templateUrl: 'app/app.component.html',
    styleUrls:  ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ComicService,
    ]
})
export class AppComponent {
    public title = 'Interactive Comics';
}
