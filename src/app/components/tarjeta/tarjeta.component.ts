import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() foto = '';
  @Input() nombre = '';
  @Input() apellido = '';
  @Input() ataque = '';
  @Input() defensa = '';
  @Input() skills = '';
  @Output() actionClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.actionClick.emit();
  }
}
