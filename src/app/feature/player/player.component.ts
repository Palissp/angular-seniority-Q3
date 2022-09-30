import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '@core/services/player.service';
import { PositionService } from '@core/services/position.service';
import { Player } from '@models/player';
import { Position } from '@models/position';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player = new Player();
  form = new FormGroup({});

  positions: Position[] = [];

  constructor(
    private playerService: PlayerService,
    private fb: FormBuilder,
    private positionService: PositionService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getPositions();
  }

  initForm() {
    this.form = this.fb.group({
      "firstName": [this.player.firstName, [Validators.required]],
      "lastName": [this.player.lastName, [Validators.required]],
      "image": [this.player.image, [Validators.required]],
      "attack": [this.player.attack, [Validators.required]],
      "defense": [this.player.defense, [Validators.required]],
      "skills": [this.player.skills, [Validators.required]],
      "idPosition": [this.player.idPosition, [Validators.required]],
    });

  }

  getPositions(){
    this.positionService.getPosition().subscribe(res=>{
      this.positions = res;
    })
  }

  save() {
    this.player = this.form.value;
    console.log(this.player);
    this.playerService.savePlayer(this.player).subscribe(res => {
      console.log(res);
    })

  }


  change(change: any){
    console.log(change)
    //this.form.setValue()
  }
}
