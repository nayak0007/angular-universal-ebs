import { TestBed } from '@angular/core/testing';

import { RestssrService } from './restssr.service';

describe('RestssrService', () => {
  let service: RestssrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestssrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
