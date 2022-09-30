import {Component, Input, OnInit} from '@angular/core';
import {PlayerDToInterface} from "../../interfaces/playerDTo.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() player: PlayerDToInterface | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
