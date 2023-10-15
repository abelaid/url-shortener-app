import { TestBed } from '@angular/core/testing';

import { API_HOST, ShortenUrlServiceService } from './shorten-url-service.service';
import { AppTestingModule } from 'src/test/app-testing.module';
import { HttpTestingController } from '@angular/common/http/testing';
import { tap,switchMap } from 'rxjs/operators';

describe('ShortenUrlServiceService', () => {
  let service: ShortenUrlServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    });
    service = TestBed.inject(ShortenUrlServiceService);
    httpTestingController =  TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created and trigger refresh', () => {
    expect(service).toBeTruthy();
    expect(service.refresh$.value).toBeTruthy();

  });

  describe('shorten', () => {
    it('should shorten and trigger refresh', (done) =>{
      
      service.shorten("url").pipe(
        tap((shortened) => expect(shortened?.url).toBe('shortened')),
        switchMap(() => service.refresh$),
        tap((refresh) => {
          expect(refresh).toBeTrue();
          done();
        })
      ).subscribe();

      const req = httpTestingController.expectOne(`${API_HOST}?url=url`);
      expect(req.request.method).toBe('GET');
      req.flush({url: 'shortened'});
      
    });

    
  });
});
