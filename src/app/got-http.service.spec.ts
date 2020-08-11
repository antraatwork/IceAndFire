import { TestBed } from '@angular/core/testing';

import { GotHttpService } from './got-http.service';

describe('GotHttpService', () => {
  let service: GotHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
