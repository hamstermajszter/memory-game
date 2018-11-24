import { Component, OnInit } from '@angular/core';

import { Field } from './field/field.model'
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {

  board: Field[];

  constructor(private boardService: BoardService) { 
  }

  ngOnInit() {
    this.board = this.boardService.getNewBoard(3);
    console.log(this.board);
    
  }

}
