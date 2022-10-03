import { Player } from './models/player';
import { PlayerService } from './services/player.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nuevo:boolean;
  bandera:boolean;
  title = 'jest-angular';
  players: Player[] = [];
  busquedaNombre:string;

  playerForm:FormGroup = new FormGroup({});
  formBuilder:FormBuilder = new FormBuilder();

  player: Player =  {
    id:20,
    firstName:	'Christiano',
    lastName:	'Ronaldo',
    image:	'https://www.americaeconomia.com/media-library/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNjk4OTcwNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTcyODI3MX0.FtAMQnPjZbVBchuEOvW9olRWVBBOFClH2gnjCJH_FO8/image.jpg?width=980',
    attack:	99,
    defense:	70,
    skills:	0,
    idAuthor:	8,
    idPosition:	2, 
   

    /*{
      "id":3,
      "firstName":"Leo",
      "lastName":"Messi",
      "image":"https://www.americaeconomia.com/media-library/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNjk4OTcwNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTcyODI3MX0.FtAMQnPjZbVBchuEOvW9olRWVBBOFClH2gnjCJH_FO8/image.jpg?width=980",
      "attack":99,
      "defense":70,
      "skills":99,
      "idAuthor":15,
      "idPosition":1
   }*/
  };
  constructor(private servicio: PlayerService) {
    this.nuevo = false;
    this.bandera = false;
    this.busquedaNombre='';

  }

  ngOnInit(): void {
    console.log('Activa componente');
    this.servicio.getPLayers().subscribe((players:Player [])=>{
      this.players = players;
    console.log(players);
  });

  this.playerForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    image: [''],
    idPosition: [''],
    attack: [''],
    defense: [''],
    skills:['']
    });
  }

  addPlayer1()
  {
    this.nuevo = true;
    this.bandera = true;
  }
  submitPlayer(){

   // this.servicio.postPlayer(this.player).subscribe((nuevoPlayer:Player) => 
    //this.players.push(nuevoPlayer));
  }

  editPlayer(player:Player){}
  deletePlayer(player:Player){}

  addPlayer(){
    this.servicio.playerToEdit.next(null);
    document.getElementById('newPlayer')!.style.display = 'block';
  }
 }
