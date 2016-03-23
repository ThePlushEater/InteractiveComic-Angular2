import { Choice } from './choice';
import { Panel } from './panel';
import { Position } from './position';


export var CHOICES: Choice[] = [
    { id: 1, pid: 1, npid: 2, image: "", text: "Choice 1 Text", position: {x: 0, y: 0} },
    { id: 1, pid: 1, npid: 3, image: "", text: "Choice 2 Text", position: {x: 0, y: 0} },
];

export var PANELS: Panel[] = [
    { id: 1, cid: 1, text: "Panel 1 Text", choices: null },
    { id: 2, cid: 1, text: "Panel 2 Text", choices: null },
    { id: 3, cid: 1, text: "Panel 3 Text", choices: null },
    { id: 4, cid: 1, text: "Panel 4 Text", choices: null },
    { id: 5, cid: 1, text: "Panel 5 Text", choices: null },
    { id: 6, cid: 1, text: "Panel 6 Text", choices: null },
    { id: 7, cid: 1, text: "Panel 7 Text", choices: null },
    { id: 8, cid: 1, text: "Panel 8 Text", choices: null },
];
