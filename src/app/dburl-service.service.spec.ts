import { TestBed } from '@angular/core/testing';

import { DburlServiceService } from './dburl-service.service';

describe('DburlServiceService', () => {
  let service: DburlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DburlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
