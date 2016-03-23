import { Position } from './position';

export interface Choice {
    id: number;
    pid: number;
    npid: number;
    image: string;
    text: string;
    position: Position;
}
