import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  selectNewBoardSize(){
    this.boardService.initNewBoard();    
  }

}
