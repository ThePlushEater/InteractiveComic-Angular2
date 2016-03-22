import {Injectable} from 'angular2/core';

import { Comic } from './comic';
import { COMICS } from './mock-comics';

@Injectable()
export class ComicService {
    getHeroes() {
        return new Promise<Comic[]>(resolve =>
            setTimeout(()=>resolve(COMICS), 100) // 0.1 seconds
        );
        //return Promise.resolve(HEROES);
    }
    getHero(id: number) {
        return new Promise<Comic[]>(resolve =>
            setTimeout(()=>resolve(COMICS), 100) // 0.1 seconds
        ).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}
