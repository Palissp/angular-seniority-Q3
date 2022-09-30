import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PositionService } from './position.service';
import { environment } from '../../../../../environments/environment';

describe('PositionService', () => {
  let service: PositionService;
  let httpTestingController: HttpTestingController;
  let apiURL: string = environment.api;

  const foundPosition = {
    id: 1,
    name: 'Delantero',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call getAllPositions", (done) => {
    const mockDataDto: any = [];
    const mockDataResponse: any = [];

    service.getAllPositions()
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/position`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });

  it("should call getPositionById", (done) => {
    const mockDataDto: any = foundPosition;

    const mockDataResponse: any = foundPosition;

    service.getPositionById('1')
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/position/1`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });
});
