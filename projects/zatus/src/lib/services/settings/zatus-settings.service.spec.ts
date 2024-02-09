import { TestBed } from '@angular/core/testing';

import { ZatusSettingsService } from './zatus-settings.service';

describe('ZatusSettingsService', () => {
  let service: ZatusSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZatusSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
