import { Component, EventEmitter, Input, Output } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isModalOpen: boolean = true;
  @Input() idElement: string = 'container-modal';
  @Input() title: string = ""
  @Output() onCancel = new EventEmitter<any>();

  public assetsContext = environment.assetsContext;



  close() {
    this.onCancel.emit();
  }

  stopPropagation($event: any) {
    $event.stopPropagation();
  }

  manageOutsideClick() {
      this.close()
  }
}
