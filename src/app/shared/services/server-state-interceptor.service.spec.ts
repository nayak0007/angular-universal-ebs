import { TestBed } from '@angular/core/testing';

import { ServerStateInterceptorService } from './server-state-interceptor.service';

describe('ServerStateInterceptorService', () => {
  let service: ServerStateInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerStateInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
