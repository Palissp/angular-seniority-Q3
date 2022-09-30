import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CardComponent,
      multi: true
    }
  ]
})
export class CardComponent implements OnInit {
  @Input()
  public title: string = '';

  @Input()
  public src: string = '';

  @Input()
  public attack: number = 0;

  @Input ()
  public defense: number = 0;

  @Input()
  public skills: number = 0;

  @Output() onClickEditEvent = new EventEmitter<any>();

  @Output() onClickDeleteEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onClickEdit(event: any) {
    this.onClickEditEvent.emit(event);
  }

  onClickDelete(event: any) {
    this.onClickDeleteEvent.emit(event);
  }
}
