import { OnInit } from '@angular/core';
import { shuffle } from 'lodash';
import { Field } from './field/field.model';
import { CardType } from './field/types'
import { Subject } from 'rxjs';

export class BoardService {

    flippedField: Field;
    board: Field[];
    boardChanged = new Subject<Field[]>();

    constructor(){
        this.board = this.getNewBoard(3);
    }

    private generateBoard(numberOfPairs: number) {
        let typeList = Object.keys(CardType)
        let board = [];
        for (let index = 0; index < numberOfPairs; index++) {
            board.push(new Field(CardType[typeList[index]]));
            board.push(new Field(CardType[typeList[index]]));
        }
        return board;
    }

    getNewBoard(numberOfPairs: number): Field[] {
        return shuffle(this.generateBoard(numberOfPairs))
    }

    getBoard() {
        return this.board;
    }

    flipField(field: Field){
        if (this.flippedField === undefined){
            this.flippedField = field
            this.flippedField.isRevealed = true;
        } else {
            this.checkMatch(field)
            this.flippedField = undefined;
        } 
        this.boardChanged.next(this.board);
    }

    checkMatch(field: Field): void{
        if( field.getType() === this.flippedField.getType()) {
            field.isRevealed = true;
        } else {
            this.flippedField.isRevealed = false;
        }
    }
}