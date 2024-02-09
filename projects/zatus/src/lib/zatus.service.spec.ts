import { TestBed } from '@angular/core/testing';

import { ZatusService } from './zatus.service';

describe('ZatusService', () => {
  let service: ZatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
