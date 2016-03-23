import {Injectable} from 'angular2/core';

import { Comic } from './comic';
import { COMICS } from './mock-comics';

@Injectable()
export class ComicService {
    getComicsAll() {
        return new Promise<Comic[]>(resolve =>
            setTimeout(()=>resolve(COMICS), 0) // 0.1 seconds
        );
        //return Promise.resolve(COMICS);
    }
    getComicFromId(id: number) {
        return new Promise<Comic[]>(resolve =>
            setTimeout(()=>resolve(COMICS), 0) // 0.1 seconds
        ).then(
            comics => comics.filter(hero => hero.id === id)[0]
        );
    }
}
