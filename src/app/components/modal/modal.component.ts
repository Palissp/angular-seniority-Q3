import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/player-interface';
import { PlayerServiceService } from 'src/app/services/player-service/player-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formPlayer!: FormGroup
  btnChange: string = 'Registro de jugador';
  btnAction: string = 'Registrar';
  edit!: Player;


  getId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private formBuilder: FormBuilder, 
    private activatedRoute:ActivatedRoute, 
    private playerService: PlayerServiceService ) { }

  ngOnInit(): void {
  }
  buildForm() {
    this.formPlayer = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      image: [null, Validators.required],
      position: [null, Validators.required],
      ataque: [false, Validators.required],
      defensa: [false, Validators.required],
      skills: [false, Validators.required],
    });
    if (this.getId) {
      this.playerService.getPlayerById((this.getId))
        .subscribe({
          next: book => {
            this.btnAction = 'Editar';
            this.btnChange = 'Edición de Libro'
            this.edit = book
            this.formPlayer.patchValue({
              firstName: this.edit.firstName,
              image: this.edit.image,
              
            })
          }
        })
    }
  }
  get image(): FormControl {
    return this.formPlayer.get('image') as FormControl
  }
  get firstName(): FormControl {
    return this.formPlayer.get('firstName') as FormControl
  }  
  get lastName(): FormControl {
    return this.formPlayer.get('lastName') as FormControl
  }


  addPlayer(){
    const formValue = this.formPlayer.getRawValue();
    if (this.formPlayer.invalid) {
         this.formPlayer.markAllAsTouched()
          return;
       }
       if (!this.edit) {
            this.playerService.postPlayer(formValue)
              .subscribe({
                next: res => {
                  console.log(res, 'res de post')
                  alert('jugador creado exitosamente')      
                },
                error: error => {
                  alert('Ha ocurrido un error al añadir los datos')
                }
              })
            this.formPlayer.reset()
          } else {
            this.updatePlayer()
          }
  }
  
 
  updatePlayer() {
    
    this.playerService.editPlayerById(this.edit!.id, this.formPlayer.getRawValue())
      .subscribe({
        next: res => {
          console.log(res, 'res update')
          alert('Libro actualizado correctamente');
          this.formPlayer.reset();
        },
        error: error => {
          alert(`${error} Error en la actualizaación de datos`)
        }

      })
  }

}
