import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

describe('Player.ServiceService', () => {
  let service: PlayerService;
  let http: HttpTestingController;
  let apiUrl = environment.api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[PlayerService]
    });
    service = TestBed.inject(PlayerService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
