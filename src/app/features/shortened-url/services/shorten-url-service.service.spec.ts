import { TestBed } from '@angular/core/testing';

import { ShortenUrlServiceService } from './shorten-url-service.service';

describe('ShortenUrlServiceService', () => {
  let service: ShortenUrlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortenUrlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
