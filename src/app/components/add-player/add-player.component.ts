import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  public frmPlayer!: FormGroup;

  constructor( private readonly fb: FormBuilder,) { }

  ngOnInit(): void {
    this.frmPlayer = this.fb.group({
      id:[null],
      image: [null, [Validators.maxLength(50), Validators.required]],
      lastName: [null, [Validators.maxLength(50), Validators.required]],
      firstName: [null,  [Validators.maxLength(50), Validators.required]],
      attack:[null,  [Validators.maxLength(50), Validators.required]],
      defense:[null,  [Validators.maxLength(50), Validators.required]],
      skills:[null,  [Validators.maxLength(50), Validators.required]]
    });

  }

  closeModal(){
    const modal = document.getElementById('myModal');
    if(modal){
      modal.style.display = 'none';
    }
  }


}
