import { shuffle } from 'lodash';
import { Field } from './field/field.model';

export class BoardService {
    constructor(){}

    private generateBoard(numberOfPairs: number) {
        let board = [];
        for (let index = 0; index < numberOfPairs; index++) {
            board.push(new Field());
            board.push(new Field());
        }
        return board;
    }

    getNewBoard(numberOfPairs: number): Field[] {
        return shuffle(this.generateBoard(numberOfPairs))
    }

}