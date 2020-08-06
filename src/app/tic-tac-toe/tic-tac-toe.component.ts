import { Component, OnInit, Input } from '@angular/core';
 //faCircle
 import {faCircle} from '@fortawesome/free-regular-svg-icons';
 //faPen,faTimes
 import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tic-tac',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  @Input() iconName:string;
  
  faCircle = faCircle;
  faPen = faPen;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
