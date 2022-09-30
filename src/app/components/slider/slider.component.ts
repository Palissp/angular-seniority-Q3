import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { JugadoresService } from 'src/app/_services/jugadores.service';
import { Player } from './../../_modelo/player';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor {

  buscar!:string;
  jugadores: Player[] =[];
  id!:string;



  @Input()
  public label: string = '';
  field = '0';

 

  constructor(
    private jugadoresService: JugadoresService
  ) {}

  onChange: any = () => {};
  onTouch: any = () => {};


  ngOnInit(): void {
    this.listarJugadores();

    this.jugadoresService.getJugadorCambio().subscribe(data => { 

      this.jugadores = data

     
    });
    
    
    
  }
  filtrar(valor: string){  
   const jugadoresAux = this.jugadores.filter(data => data.firstName.trim().toLowerCase()==valor.trim().toLowerCase());
   if(jugadoresAux.length>=1){
    this.jugadores = jugadoresAux
   }
   if(this.buscar == ""){
    this.listarJugadores();
   }
  
   console.log(this.jugadores)
  }
  listarJugadores(){
    this.jugadoresService.listar().subscribe(data => {
     
      this.jugadores = data
    })
  }
  editarJugador(id:string){
    console.log(id)
    this.id = id;
    let modal_t  = document.getElementById('modal_1')
    modal_t?.classList.remove('hhidden')
    modal_t?.classList.add('sshow');  
  }
  agregarJugador(){
    let modal_t  = document.getElementById('modal_1')
    modal_t?.classList.remove('hhidden')
    modal_t?.classList.add('sshow');  
  }

  // sets the value used by the ngModel of the element
  set value(val: string) {
    this.field = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    this.value = value;
  }

  /* When the value in the UI is changed, this method will invoke a callback function */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}
