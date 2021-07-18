import { TestBed } from '@angular/core/testing';

import { BrowserStateInterceptorService } from './browser-state-interceptor.service';

describe('BrowserStateInterceptorService', () => {
  let service: BrowserStateInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserStateInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
