import { Component, OnInit, Input } from '@angular/core';

import { Field } from './field.model'
import { BoardService } from '../board.service';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() field: Field;
  @Input() index: number;

  constructor(private boardService: BoardService) {}

  ngOnInit() {
  }

  flip(){
    this.boardService.flipField(this.field)
  }

}
