import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalConfigI } from '../../models/modal-config.model';
import { PlayerService } from '../../services/player/player.service';
import { environment } from "../../../../../environments/environment";
import { PlayerI } from '../../models/player.model';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss']
})
export class HomeModalComponent implements OnInit {
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  @Output() closeOutput = new EventEmitter<boolean>();
  title: string = 'Agregar Juagador';
  formPlayer: FormGroup;
  idAuthor: number = environment.authorId;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
  ) {
    this.formPlayer = this.initForm();
  }

  ngOnInit(): void {
  }

  open(refParams?: ModalConfigI) {
    this.modal.nativeElement.style.display = 'block';
    console.log(refParams);
    if (refParams?.data?.action === 'update') {
      this.loadData(refParams?.data?.data)
    }
  }

  close(ref?: any) {
    this.modal.nativeElement.style.display = 'none';
    this.closeOutput.emit(ref);
  }

  initForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: ['', Validators.required],
      attack: [0, Validators.required],
      defense: [0, Validators.required],
      skills: [0, Validators.required],
      idAuthor: [this.idAuthor, Validators.required],
      idPosition: [0, Validators.required]
    });
  }

  validateForm() {
    console.log(this.formPlayer.value);
    if (this.formPlayer.valid) {
      this.postPlayer();
    }
  }


  postPlayer() {
    this.cleanForm(this.formPlayer);
    const data = this.formPlayer.value;
    this.playerService.postPlayer(data).subscribe(res => {
      console.log('POST:', res);
      this.close(true);
    });
  }

  cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const value = typeof formGroup.get(key)?.value === 'string' ? formGroup.get(key)?.value.trim() : formGroup.get(key)?.value;
      formGroup.get(key)?.setValue(value);
    });
  }

  loadData(data: PlayerI) {
    let _data = { ...data };
    delete _data.id;
    this.formPlayer.patchValue(_data)
  }


}
