import {Component, Input, OnInit} from '@angular/core';
import {PlayerDToInterface} from "../../interfaces/playerDTo.interface";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlayerService} from "../../services/player.service";

@Component({
    selector: 'app-create-update-player',
    templateUrl: './create-update-player.component.html',
    styleUrls: ['./create-update-player.component.scss']
})
export class CreateUpdatePlayerComponent implements OnInit {
    @Input() player: PlayerDToInterface | undefined;
    public frmTodo: FormGroup = this.fb.group({   });

    constructor(private readonly fb: FormBuilder,
                private readonly playerService: PlayerService,
                ) {
    }

    ngOnInit(): void {
        // this.todoURLParam = this.route.snapshot.params.todoURLParam;
        // if (this.todoURLParam !== 'todo') {
        //   this.configureForEdit();
        // }
        this.frmTodo = this.fb.group({
            nombre: ["", [Validators.maxLength(50), Validators.required]],
            apellido: ["", [Validators.maxLength(50), Validators.required]],
            imagen: ["", [Validators.maxLength(50), Validators.required]],
            posicion: ["", [Validators.maxLength(50), Validators.required]],
            ataque: [0, [Validators.required]],
            defensa: [0, [Validators.required]],
            skills: [0, [Validators.required]]
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


    onClickReturn() {
        // this.router.navigate(['/']);
    }
    save(){
        let player:PlayerDToInterface= this.frmTodo.value;
        player.idAuthor=21;
        this.playerService.postNewPlayer(player).subscribe(resp=>{console.log("creado")},error => {console.log("error")});

    }

}
