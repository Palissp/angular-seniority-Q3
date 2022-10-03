import { PositionService } from 'src/app/services/position.service';
import { TestBed } from '@angular/core/testing';






describe('PositionService', () => {
  let service: PositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
