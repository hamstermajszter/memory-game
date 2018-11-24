import { OnInit } from '@angular/core';
import { shuffle } from 'lodash';
import { Field } from './field/field.model';
import { CardType } from './field/types'
import { Subject } from 'rxjs';

export class BoardService {

    counter = 0;
    boardSizes = [3,4,5,6,7,8,9,10];
    selectedBoardSize = 3;
    blockBoard = false;
    flippedField: Field;
    board: Field[];
    boardChanged = new Subject<Field[]>();

    constructor(){
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

    initNewBoard(): void {
        this.board = shuffle(this.generateBoard(this.selectedBoardSize));
        this.boardChanged.next(this.board);
        this.flippedField = undefined;
        this.blockBoard = false;
        this.counter = 0;
    }

    getBoard() {
        return this.board;
    }

    flipField(field: Field){
        if (this.flippedField === undefined){
            this.flippedField = field
            this.flippedField.isRevealed = true;
        } else {
            field.isRevealed = true;
            this.blockBoard = true;
            setTimeout(() => {
                this.checkMatch(field)
                this.flippedField = undefined;
                this.blockBoard = false;
            }, 2000);
        }          
    }

    checkMatch(field: Field): void{
        if( field.getType() !== this.flippedField.getType()) {
            this.flippedField.isRevealed = false;
            field.isRevealed = false;
            this.counter++;
        }
    }

    gameOver() {
        return this.board.reduce((result, field) =>{return result && field.isRevealed}, false);
    }
}