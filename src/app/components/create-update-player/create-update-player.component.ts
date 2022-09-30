import {Component, Input, OnInit} from '@angular/core';
import {PlayerDToInterface} from "../../interfaces/playerDTo.interface";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-create-update-player',
    templateUrl: './create-update-player.component.html',
    styleUrls: ['./create-update-player.component.scss']
})
export class CreateUpdatePlayerComponent implements OnInit {
    @Input() player: PlayerDToInterface | undefined;
    public frmTodo: FormGroup = this.fb.group({   });

    constructor(private readonly fb: FormBuilder) {
    }

    ngOnInit(): void {
        // this.todoURLParam = this.route.snapshot.params.todoURLParam;
        // if (this.todoURLParam !== 'todo') {
        //   this.configureForEdit();
        // }
        this.frmTodo = this.fb.group({
            nombre: [null, [Validators.maxLength(50), Validators.required]],
            apellido: [null, [Validators.maxLength(50), Validators.required]],
            imagen: [null, [Validators.maxLength(50), Validators.required]],
            posicion: [null, [Validators.maxLength(50), Validators.required]],
            ataque: [null, [Validators.required]],
            defensa: [null, [Validators.required]],
            skills: [null, [Validators.required]]
        });

    }

    setDefensa(event:any){
        this.frmTodo.controls['defensa'].setValue(event);
    }
    setPuntaje(event:any){
        this.frmTodo.controls['ataque'].setValue(event);

    }
    setSkills(event:any){
        this.frmTodo.controls['skills'].setValue(event);

    }
    onClickAdd() {
        // this.todo.description = this.frmTodo.value.descriptionTodo;
        // this.todo.status = 0;
        // this.todo.finish_at = this.frmTodo.value.finishAt;
        // this.todo.id_author = 16;
        // console.log(this.todo);
        // if (this.todoURLParam === 'todo') {
        //   this.todoService.postNewTodo(this.todo).subscribe(
        //       (data) => {
        //         if (data.success) {
        //           alert('creado exitosamente');
        //           this.router.navigate(['/']);
        //         } else {
        //           alert('Error al crear registro');
        //           console.error(data);
        //         }
        //       },
        //       (error) => {
        //         alert('Error al crear registro');
        //       }
        //   );
        //
        // } else {
        //   this.todoService.updateTodo(this.todo).subscribe(
        //       (data) => {
        //         if (data.success) {
        //           alert('actualizado exitosamente');
        //           this.router.navigate(['/']);
        //         } else {
        //           alert('Error al actualizar registro');
        //           console.error(data);
        //         }
        //       },
        //       (error) => {
        //         alert('Error al actualizar registro');
        //       }
        //   );
        // }
    }

    onClickReturn() {
        // this.router.navigate(['/']);
    }
    save(){
        console.log(this.frmTodo.value);

    }

}
