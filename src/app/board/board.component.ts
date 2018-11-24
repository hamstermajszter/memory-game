import { Component, OnInit } from '@angular/core';

import { Field } from './field/field.model'
import { BoardService } from './board.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {

  board: Field[];
  private subscription: Subscription;

  constructor(private boardService: BoardService) { 
  }

  ngOnInit() {
    this.board = this.boardService.getBoard();
    this.subscription = this.boardService.boardChanged
      .subscribe(
        (board: Field[]) => {
          this.board = board
        }
      );    
  }

}
