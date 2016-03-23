import {Injectable} from 'angular2/core';

import { Comic } from './../comic/comic';
import { Choice } from './choice';
import { Panel } from './panel';
import { CHOICES } from './mock-panels';
import { PANELS } from './mock-panels';

@Injectable()
export class PanelService {
    getPanelsFromComic(comic: Comic) {
        return new Promise<Panel[]>(resolve =>
            setTimeout(()=>resolve(PANELS), 0) // 0.1 seconds
        ).then(
            panels => panels.filter(panel => panel.cid === comic.id)
        );
    }
    getPanelsFromComicId(cid: number) {
        return new Promise<Panel[]>(resolve =>
            setTimeout(()=>resolve(PANELS), 0) // 0.1 seconds
        ).then(
            panels => panels.filter(panel => panel.cid === cid)
        );
    }
    getPanelFromPanelId(pid: number) {
        return new Promise<Panel[]>(resolve =>
            setTimeout(()=>resolve(PANELS), 0) // 0.1 seconds
        ).then(
            panels => panels.filter(panel => panel.cid === pid)[0]
        );
    }
    getChoicesFromPanel(panel: Panel) {
        return new Promise<Choice[]>(resolve =>
            setTimeout(()=>resolve(CHOICES), 0) // 0.1 seconds
        ).then(
            choices => choices.filter(choice => choice.pid === panel.id)
        );
    }
}
