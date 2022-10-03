import { Player } from 'src/app/models/player';
import { TestBed } from '@angular/core/testing';
import { PlayerService } from './player.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';





const player:Player={
  
  id:20,
  firstName:	'Christiano',
  lastName:	'Ronaldo',
  image:	'https://www.americaeconomia.com/media-library/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNjk4OTcwNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTcyODI3MX0.FtAMQnPjZbVBchuEOvW9olRWVBBOFClH2gnjCJH_FO8/image.jpg?width=980',
  attack:	99,
  defense:	70,
  skills:	0,
  idAuthor:	8,
  idPosition:	2, 
}
const urlApi:string="https://bp-todolist.herokuapp.com";
const idAuthor:string='8'

const todos: Player[]=[player];

describe('PlayerService', () => {
  let service: PlayerService;
  let httpMock:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PlayerService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    });
    /* service = TestBed.inject(SheroesService); */
  });

  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerService);
    httpMock=TestBed.inject(HttpTestingController);
  })

  afterEach(()=>{
    httpMock.verify();
  })

  it('Varifica creación servicio TodoService', () => {
    expect(service).toBeTruthy();
  });

  it('prueba metodo obtener lista',()=>{
    service.getPLayers().subscribe((resp)=>{
      expect(resp).toEqual(todos);
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('GET');
    resq.flush(todos);
  })



  it('prueba metodo AgregarTodos',()=>{
    
    service.createPlayer(player).subscribe((resp)=>{
      expect(resp).toEqual("Agregado");
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('POST');
    resq.flush(todos);
  })
  it('prueba metodo editar',()=>{
    let id=5
    service.editPlayer(player).subscribe((resp)=>{
      expect(resp).toEqual("Personaje actualizado");
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}/${id}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('PUT');
    resq.flush(player);
  })

  

  it('prueba metodo eliminar',()=>{
    let id=2
    service.deletePlayer(id).subscribe((resp)=>{
      expect(resp).toEqual("eliminar");
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}/${id}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('DELETE');
    resq.flush(todos);
  })
    
});


