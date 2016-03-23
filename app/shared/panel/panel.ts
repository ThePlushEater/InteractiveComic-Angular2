import { Choice } from './choice';

export interface Panel {
    id: number;
    cid: number;
    text: string;
    choices: Choice[];
}
